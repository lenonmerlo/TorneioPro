// ROTA: /api/amador/partidas e /api/oficial/partidas
import { Request, Response } from 'express';
import prisma from '../lib/prismaClient';

// [POST] Criar nova partida (amadora ou oficial)
export const criarPartida = async (req: Request, res: Response) => {
  const { torneioId, equipe1Id, equipe2Id, pontosEquipe1, pontosEquipe2, fase } = req.body;

  if (!torneioId || !equipe1Id || !equipe2Id || !fase) {
    return res.status(400).json({ message: 'Campos obrigatórios ausentes.' });
  }

  try {
    const novaPartida = await prisma.partida.create({
      data: {
        torneioId,
        equipe1Id,
        equipe2Id,
        pontosEquipe1,
        pontosEquipe2,
        fase,
      },
    });

    return res.status(201).json(novaPartida);
  } catch (error) {
    console.error('Erro ao criar partida:', error);
    return res.status(500).json({ message: 'Erro interno ao criar partida.' });
  }
};

// [GET] Listar todas as partidas (usado por amador e oficial)
export const listarTodasPartidas = async (_req: Request, res: Response) => {
  try {
    const partidas = await prisma.partida.findMany({
      include: {
        equipe1: {
          include: { atletas: { include: { atleta: true } } },
        },
        equipe2: {
          include: { atletas: { include: { atleta: true } } },
        },
        torneio: {
          select: { id: true, nome: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return res.status(200).json(partidas);
  } catch (error) {
    console.error('Erro ao listar partidas:', error);
    return res.status(500).json({ message: 'Erro interno ao buscar partidas.' });
  }
};

// [GET] Listar partidas por torneio
export const listarPartidasPorTorneio = async (req: Request, res: Response) => {
  const { torneioId } = req.params;

  try {
    const partidas = await prisma.partida.findMany({
      where: { torneioId: Number(torneioId) },
      include: {
        equipe1: {
          include: { atletas: { include: { atleta: true } } },
        },
        equipe2: {
          include: { atletas: { include: { atleta: true } } },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return res.status(200).json(partidas);
  } catch (error) {
    console.error('Erro ao listar partidas do torneio:', error);
    return res.status(500).json({ message: 'Erro ao buscar partidas do torneio.' });
  }
};

// [PUT] Atualizar placar de uma partida
export const atualizarPlacarPartida = async (req: Request, res: Response) => {
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
    console.error('Erro ao atualizar placar da partida:', error);
    return res.status(500).json({ message: 'Erro ao atualizar partida.' });
  }
};

// [DELETE] Remover uma partida
export const deletarPartida = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.partida.delete({
      where: { id: Number(id) },
    });

    return res.status(200).json({ message: 'Partida deletada com sucesso.' });
  } catch (error) {
    console.error('Erro ao deletar partida:', error);
    return res.status(500).json({ message: 'Erro ao deletar partida.' });
  }
};

// [GET] Definir vencedores automaticamente com base no placar
export const definirVencedoresAutomaticamente = async (_req: Request, res: Response) => {
  try {
    const partidas = await prisma.partida.findMany({
      where: {
        vencedorId: null, 
        pontosEquipe1: { not: null }, 
        pontosEquipe2: { not: null }, 
      },
    });

    for (const partida of partidas) {
      
      const { id, pontosEquipe1, pontosEquipe2, equipe1Id, equipe2Id } = partida;

      if (pontosEquipe1! > pontosEquipe2!) {
        await prisma.partida.update({
          where: { id },
          data: { vencedorId: equipe1Id },
        });
      } else if (pontosEquipe2! > pontosEquipe1!) {
        await prisma.partida.update({
          where: { id },
          data: { vencedorId: equipe2Id },
        });
      }
     }

    return res.status(200).json({ message: 'Vencedores definidos com sucesso.' });
  } catch (error) {
    console.error('Erro ao definir vencedores:', error);
    return res.status(500).json({ message: 'Erro ao processar vencedores.' });
  }
};
