import { Request, Response } from 'express';
import prisma from '@/lib/prismaClient';

export const criarAtleta = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nome, genero, nivel, equipeId } = req.body;

    const atleta = await prisma.atleta.create({
      data: {
        nome,
        genero,
        nivel,
        equipe: equipeId ? { connect: { id: equipeId } } : undefined
      }
    });

    res.status(201).json(atleta);
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao criar atleta', detalhe: error.message });
  }
};

export const listarAtletas = async (_req: Request, res: Response): Promise<void> => {
  try {
    const atletas = await prisma.atleta.findMany({
      include: { equipe: true }
    });

    res.json(atletas);
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao buscar atletas' });
  }
};

export const atualizarAtleta = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { nome, genero, nivel, equipeId } = req.body;

    const atletaAtualizado = await prisma.atleta.update({
      where: { id: Number(id) },
      data: {
        nome,
        genero,
        nivel,
        equipeId
      }
    });

    res.json(atletaAtualizado);
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao atualizar atleta', detalhe: error.message });
  }
};

export const deletarAtleta = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    await prisma.atleta.delete({
      where: { id: Number(id) }
    });

    res.status(204).send(); // No content
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao deletar atleta', detalhe: error.message });
  }
};
