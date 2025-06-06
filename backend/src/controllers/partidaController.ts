import { Request, Response } from 'express';
import prisma from '@/lib/prismaClient';

export const criarPartida = async (req: Request, res: Response) => {
  try {
    const { torneioId, equipe1Id, equipe2Id, pontosEquipe1, pontosEquipe2, fase } = req.body;
    const novaPartida = await prisma.partida.create({
      data: { torneioId, equipe1Id, equipe2Id, pontosEquipe1, pontosEquipe2, fase }
    });
    res.status(201).json(novaPartida);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar partida', detalhe: error });
  }
};

export const listarPartidas = async (_: Request, res: Response) => {
  try {
    const partidas = await prisma.partida.findMany({
      include: {
        equipe1: true,
        equipe2: true,
        torneio: true
      }
    });
    res.json(partidas);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao listar partidas' });
  }
};

export const deletarPartida = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await prisma.partida.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao deletar partida' });
  }
};

export const gerarRanking = async (req: Request, res: Response) => {
  try {
    const { torneioId } = req.query;
    const partidas = await prisma.partida.findMany({
      where: { torneioId: Number(torneioId) }
    });

    const ranking: Record<string, { pontos: number, vitorias: number }> = {};

    partidas.forEach(({ equipe1Id, equipe2Id, pontosEquipe1, pontosEquipe2 }) => {
      if (!ranking[equipe1Id]) ranking[equipe1Id] = { pontos: 0, vitorias: 0 };
      if (!ranking[equipe2Id]) ranking[equipe2Id] = { pontos: 0, vitorias: 0 };

      if (pontosEquipe1 > pontosEquipe2) {
        ranking[equipe1Id].pontos += 3;
        ranking[equipe1Id].vitorias += 1;
      } else if (pontosEquipe2 > pontosEquipe1) {
        ranking[equipe2Id].pontos += 3;
        ranking[equipe2Id].vitorias += 1;
      } else {
        ranking[equipe1Id].pontos += 1;
        ranking[equipe2Id].pontos += 1;
      }
    });

    const resultado = Object.entries(ranking).map(([equipeId, dados]) => ({
      equipeId: Number(equipeId),
      ...dados
    }));

    res.json(resultado.sort((a, b) => b.pontos - a.pontos));
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao gerar ranking' });
  }
};
