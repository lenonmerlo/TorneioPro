// 📁 backend/src/controllers/sorteioController.ts
// POST /sorteio/:torneioId - Sorteia quartetos equilibrados, gera equipes e partidas

import { Request, Response } from 'express';
import prisma from '../lib/prismaClient';
import { sortearQuartetoMistoBackend } from '../utils/amador/sortearQuartetoMistoBackend';

export const dispararSorteioAmador = async (req: Request, res: Response) => {
  const { torneioId } = req.params;
  const { flexivel = true } = req.body;

  try {
    const participacoes = await prisma.participacao.findMany({
      where: { torneioId: Number(torneioId) },
      include: { atleta: true },
    });

    const atletas = participacoes.map(p => p.atleta);

    if (atletas.length < 4) {
      return res.status(400).json({ message: 'Número insuficiente de atletas para sortear.' });
    }

    const resultado = sortearQuartetoMistoBackend(atletas, { flexivel });

    await prisma.$transaction(async (tx) => {
      const todasEquipes = [...resultado.quartetos, ...resultado.flexibilizados];
      const equipesCriadas = [];

      for (let i = 0; i < todasEquipes.length; i++) {
        const time = todasEquipes[i];
        const nome = `Equipe ${i + 1}`;

        const equipe = await tx.equipe.create({
          data: {
            nome,
            tipo: 'quarteto', // padrão atual
            torneio: { connect: { id: Number(torneioId) } },
            atletas: {
              create: time.map(a => ({
                atleta: { connect: { id: a.id } }
              }))
            }
          }
        });

        equipesCriadas.push(equipe);
      }

      const reservas = Object.values(resultado.reservas).flat();
      if (reservas.length > 0) {
        await tx.equipe.create({
          data: {
            nome: 'Reservas',
            tipo: 'quarteto',
            torneio: { connect: { id: Number(torneioId) } },
            atletas: {
              create: reservas.map(a => ({
                atleta: { connect: { id: a.id } }
              }))
            }
          }
        });
      }

      if (resultado.sobraram.length > 0) {
        await tx.equipe.create({
          data: {
            nome: 'Sobrantes',
            tipo: 'quarteto',
            torneio: { connect: { id: Number(torneioId) } },
            atletas: {
              create: resultado.sobraram.map(a => ({
                atleta: { connect: { id: a.id } }
              }))
            }
          }
        });
      }

      for (let i = 0; i < equipesCriadas.length; i += 2) {
        if (equipesCriadas[i + 1]) {
          await tx.partida.create({
            data: {
              fase: 'Fase Inicial',
              torneio: { connect: { id: Number(torneioId) } },
              equipe1: { connect: { id: equipesCriadas[i].id } },
              equipe2: { connect: { id: equipesCriadas[i + 1].id } },
            }
          });
        }
      }

      await tx.torneio.update({
        where: { id: Number(torneioId) },
        data: { status: 'fechado' }
      });
    });

    res.status(200).json({
      message: 'Sorteio concluído com sucesso.',
      totalAtletas: atletas.length,
      totalQuartetos: resultado.quartetos.length,
      totalFlexibilizados: resultado.flexibilizados.length,
      reservas: Object.keys(resultado.reservas).length,
      sobraram: resultado.sobraram.length
    });

  } catch (error) {
    console.error('Erro no sorteio:', error);
    res.status(500).json({ message: 'Erro interno ao realizar sorteio.' });
  }
};
