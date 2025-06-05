import { Request, Response } from 'express';
import prisma from '@/lib/prismaClient';

export const criarEquipe = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nome, tipo } = req.body;

    const novaEquipe = await prisma.equipe.create({
      data: { nome, tipo }
    });

    res.status(201).json(novaEquipe);
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao criar equipe', detalhe: error.message });
  }
};

export const listarEquipes = async (_req: Request, res: Response): Promise<void> => {
  try {
    const equipes = await prisma.equipe.findMany({
      include: { atletas: true }
    });

    res.json(equipes);
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao buscar equipes' });
  }
};

export const atualizarEquipe = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { nome, tipo } = req.body;

    const equipeAtualizada = await prisma.equipe.update({
      where: { id: Number(id) },
      data: { nome, tipo }
    });

    res.json(equipeAtualizada);
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao atualizar equipe', detalhe: error.message });
  }
};

export const deletarEquipe = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    await prisma.equipe.delete({
      where: { id: Number(id) }
    });

    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao deletar equipe', detalhe: error.message });
  }
};
