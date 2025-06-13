// ROTA: /api/amador/partidas
// 📁 backend/src/controllers/amador/partidaAmadorController.ts

import { Request, Response } from 'express';
import prisma from '../../lib/prismaClient';

/**
 * [POST] /api/amador/partidas
 * Criar partida entre equipes amadoras (registro manual)
 */
export const criarPartidaAmador = async (req: Request, res: Response) => {
  const { torneioId, equipeAmador1Id, equipeAmador2Id, pontosEquipe1, pontosEquipe2, fase } = req.body;

  if (!torneioId || !equipeAmador1Id || !equipeAmador2Id || !fase) {
    return res.status(400).json({ message: 'Campos obrigatórios ausentes.' });
  }

  try {
    const novaPartida = await prisma.partida.create({
      data: {
        torneioId,
        equipeAmador1Id,
        equipeAmador2Id,
        pontosEquipe1,
        pontosEquipe2,
        fase,
      },
    });

    return res.status(201).json(novaPartida);
  } catch (error) {
    console.error('Erro ao criar partida amadora:', error);
    return res.status(500).json({ message: 'Erro interno ao criar partida.' });
  }
};

/**
 * [GET] /api/amador/partidas/:torneioId
 * Listar partidas de um torneio amador
 */
export const listarPartidasAmadoras = async (req: Request, res: Response) => {
  const { torneioId } = req.params;

  try {
    const partidas = await prisma.partida.findMany({
      where: {
        torneioId: Number(torneioId),
        equipeAmador1Id: { not: null },
      },
      include: {
        equipeAmador1: {
          include: {
            membros: true,
          },
        },
        equipeAmador2: {
          include: {
            membros: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return res.status(200).json(partidas);
  } catch (error) {
    console.error('Erro ao listar partidas amadoras:', error);
    return res.status(500).json({ message: 'Erro ao buscar partidas do torneio amador.' });
  }
};

/**
 * [PUT] /api/amador/partidas/:id
 * Atualizar placar de uma partida amadora
 */
export const atualizarPlacarPartidaAmador = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { pontosEquipe1, pontosEquipe2 } = req.body;

  try {
    const partidaAtualizada = await prisma.partida.update({
      where: { id: Number(id) },
      data: {
        pontosEquipe1,
        pontosEquipe2,
      },
    });

    return res.status(200).json(partidaAtualizada);
  } catch (error) {
    console.error('Erro ao atualizar placar da partida amadora:', error);
    return res.status(500).json({ message: 'Erro ao atualizar partida.' });
  }
};

/**
 * [GET] /api/amador/partidas/vencedores/definir
 * Definir vencedores automaticamente com base no placar
 */
export const definirVencedoresPartidasAmadoras = async (_req: Request, res: Response) => {
  try {
    const partidas = await prisma.partida.findMany({
      where: {
        equipeAmador1Id: { not: null },
        equipeAmador2Id: { not: null },
        vencedorId: null,
        pontosEquipe1: { not: null },
        pontosEquipe2: { not: null },
      },
    });

    for (const partida of partidas) {
      const { id, pontosEquipe1, pontosEquipe2, equipeAmador1Id, equipeAmador2Id } = partida;

      if (pontosEquipe1! > pontosEquipe2!) {
        await prisma.partida.update({
          where: { id },
          data: { vencedorId: equipeAmador1Id! },
        });
      } else if (pontosEquipe2! > pontosEquipe1!) {
        await prisma.partida.update({
          where: { id },
          data: { vencedorId: equipeAmador2Id! },
        });
      }
    }

    return res.status(200).json({ message: 'Vencedores definidos com sucesso.' });
  } catch (error) {
    console.error('Erro ao definir vencedores:', error);
    return res.status(500).json({ message: 'Erro ao processar vencedores.' });
  }
};
