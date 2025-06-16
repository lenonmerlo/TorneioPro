// 📁 backend/src/controllers/amador/sorteioController.ts
// POST /sorteio/amador/:torneioId
// Sorteia quartetos equilibrados, gera equipes e partidas no Torneio Amador

import { Request, Response } from 'express';
import prisma from '../../lib/prismaClient';
import { sortearQuartetoMistoBackend } from '../../utils/amador/sortearQuartetoMistoBackend'

export const getResultadoSorteioAmador = async (req: Request, res: Response) => {
  const { torneioId } = req.params;

  try {
    const equipes = await prisma.equipeAmador.findMany({
      where: { torneioId: Number(torneioId) },
      include: {
        membros: {
          select: { id: true, nome: true, genero: true, nivel: true }
        }
      },
      orderBy: { nome: 'asc' }
    });

    const partidas = await prisma.partida.findMany({
      where: { torneioId: Number(torneioId) },
      include: {
        equipeAmador1: true,
        equipeAmador2: true
      }
    });

    return res.status(200).json({
      totalEquipes: equipes.length,
      totalPartidas: partidas.length,
      equipes,
      partidas
    });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar resultado do sorteio.' });
  }
};


export const dispararSorteioAmador = async (req: Request, res: Response) => {

  const { torneioId } = req.params;
  const { flexivel = true } = req.body;

  try {
    const torneio = await prisma.torneio.findUnique({
      where: { id: Number(torneioId) },
      include: {
        ParticipacaoAmador: {
          include: { atleta: true }
        }
      }
    });

    if (!torneio || torneio.tipo !== 'amador') {
      return res.status(404).json({ message: 'Torneio amador não encontrado.' });
    }

    const atletas = torneio.ParticipacaoAmador.map((p: { atleta: any; }) => p.atleta);

    if (atletas.length < 4) {
      return res.status(400).json({ message: 'Número insuficiente de atletas para sortear.' });
    }

    const resultado = sortearQuartetoMistoBackend(atletas, { flexivel });

await prisma.$transaction(async (tx) => {
  const todasEquipes = [...resultado.quartetos, ...resultado.flexibilizados];
  const equipesCriadas = [];

  for (let i = 0; i < todasEquipes.length; i++) {
    const time = todasEquipes[i];
    const tipo = i < resultado.quartetos.length ? 'Quarteto' : 'Flexibilizado';
    const nome = `${tipo} ${i + 1}`;

    const equipe = await tx.equipeAmador.create({
      data: {
        nome,
        tipo,
        torneio: { connect: { id: torneio.id } },
        membros: { connect: time.map(a => ({ id: a.id })) }
      }
    });
    equipesCriadas.push(equipe);
  }

  const reservas = Object.values(resultado.reservas).flat();
  if (reservas.length > 0) {
    await tx.equipeAmador.create({
      data: {
        nome: 'Reservas',
        tipo: 'Reserva',
        torneio: { connect: { id: torneio.id } },
        membros: { connect: reservas.map(a => ({ id: a.id })) }
      }
    });
  }

  if (resultado.sobraram.length > 0) {
    await tx.equipeAmador.create({
      data: {
        nome: 'Sobrantes',
        tipo: 'Sobrante',
        torneio: { connect: { id: torneio.id } },
        membros: { connect: resultado.sobraram.map(a => ({ id: a.id })) }
      }
    });
  }

  for (let i = 0; i < equipesCriadas.length; i += 2) {
    if (equipesCriadas[i + 1]) {
      await tx.partida.create({
        data: {
          fase: 'Fase Inicial',
          torneio: { connect: { id: torneio.id } },
          equipeAmador1: { connect: { id: equipesCriadas[i].id } },
          equipeAmador2: { connect: { id: equipesCriadas[i + 1].id } }
        }
      });
    }
  }

  await tx.torneio.update({
    where: { id: torneio.id },
    data: { status: 'fechado' }
  });
});


    res.status(200).json({
      message: 'Sorteio concluído com sucesso. Equipes e partidas criadas.',
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
