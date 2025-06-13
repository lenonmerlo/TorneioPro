// ROTA: /api/oficial/partidas

import { Request, Response } from 'express';
import prisma from '../../lib/prismaClient';

// [POST] Criar nova partida oficial
export const criarPartidaOficial = async (req: Request, res: Response) => {
  const { torneioId, equipeOficial1Id, equipeOficial2Id, pontosEquipe1, pontosEquipe2, fase } = req.body;

  if (!torneioId || !equipeOficial1Id || !equipeOficial2Id || !fase) {
    return res.status(400).json({ message: 'Campos obrigatórios ausentes.' });
  }

  try {
    const novaPartida = await prisma.partida.create({
      data: {
        torneioId,
        equipeOficial1Id,
        equipeOficial2Id,
        pontosEquipe1,
        pontosEquipe2,
        fase,
      },
    });

    return res.status(201).json(novaPartida);
  } catch (error) {
    console.error('Erro ao criar partida oficial:', error);
    return res.status(500).json({ message: 'Erro interno ao criar partida.' });
  }
};

// [GET] Listar todas as partidas de um torneio oficial
export const listarPartidasOficiais = async (req: Request, res: Response) => {
  const { torneioId } = req.params;

  try {
    const partidas = await prisma.partida.findMany({
      where: {
        torneioId: Number(torneioId),
        equipeOficial1Id: { not: null },
      },
      include: {
        equipeOficial1: {
          include: { membros: { include: { atleta: true } } },
        },
        equipeOficial2: {
          include: { membros: { include: { atleta: true } } },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return res.status(200).json(partidas);
  } catch (error) {
    console.error('Erro ao listar partidas oficiais:', error);
    return res.status(500).json({ message: 'Erro interno ao buscar partidas.' });
  }
};

// [PUT] Atualizar placar de uma partida oficial
export const atualizarPlacarPartidaOficial = async (req: Request, res: Response) => {
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
    console.error('Erro ao atualizar placar da partida oficial:', error);
    return res.status(500).json({ message: 'Erro ao atualizar partida.' });
  }
};

// [DELETE] Remover uma partida oficial
export const deletarPartidaOficial = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.partida.delete({
      where: { id: Number(id) },
    });

    return res.status(200).json({ message: 'Partida deletada com sucesso.' });
  } catch (error) {
    console.error('Erro ao deletar partida oficial:', error);
    return res.status(500).json({ message: 'Erro ao deletar partida.' });
  }
};

// [GET] Definir vencedores automaticamente com base no placar
export const definirVencedoresPartidasOficiais = async (_req: Request, res: Response) => {
  try {
    const partidas = await prisma.partida.findMany({
      where: {
        equipeOficial1Id: { not: null },
        equipeOficial2Id: { not: null },
        vencedorId: null,
        pontosEquipe1: { not: null },
        pontosEquipe2: { not: null },
      },
    });

    for (const partida of partidas) {
      const { id, pontosEquipe1, pontosEquipe2, equipeOficial1Id, equipeOficial2Id } = partida;

      if (pontosEquipe1! > pontosEquipe2!) {
        await prisma.partida.update({
          where: { id },
          data: { vencedorId: equipeOficial1Id! },
        });
      } else if (pontosEquipe2! > pontosEquipe1!) {
        await prisma.partida.update({
          where: { id },
          data: { vencedorId: equipeOficial2Id! },
        });
      }
    }

    return res.status(200).json({ message: 'Vencedores definidos com sucesso.' });
  } catch (error) {
    console.error('Erro ao definir vencedores:', error);
    return res.status(500).json({ message: 'Erro ao processar vencedores.' });
  }
};
