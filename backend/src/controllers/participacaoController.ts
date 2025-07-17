// backend/src/controllers/participacaoController.ts
import { Request, Response } from 'express';
import prisma from '../lib/prismaClient';

// POST /participacoes
export const createParticipacao = async (req: Request, res: Response) => {
  const { atletaId, torneioId } = req.body;

  if (!atletaId || !torneioId) {
    return res.status(400).json({ message: 'IDs de atleta e torneio são obrigatórios.' });
  }

  try {
    // Valida se já existe inscrição
    const existente = await prisma.participacao.findUnique({
      where: {
        atletaId_torneioId: { atletaId, torneioId }
      }
    });

    if (existente) {
      return res.status(409).json({ message: 'Atleta já inscrito neste torneio.' });
    }

    const nova = await prisma.participacao.create({
      data: {
        atletaId,
        torneioId
      }
    });

    return res.status(201).json(nova);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao criar participação.' });
  }
};

// GET /participacoes
export const getTodasParticipacoes = async (_req: Request, res: Response) => {
  try {
    const participacoes = await prisma.participacao.findMany({
      include: {
        atleta: true,
        torneio: {
          select: { id: true, nome: true, data: true }
        }
      }
    });

    return res.status(200).json(participacoes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao listar participações.' });
  }
};

// GET /participacoes/:torneioId
export const getParticipacoesPorTorneio = async (req: Request, res: Response) => {
  const { torneioId } = req.params;

  try {
    const participacoes = await prisma.participacao.findMany({
      where: { torneioId: Number(torneioId) },
      include: { atleta: true }
    });

    return res.status(200).json(participacoes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao buscar participações por torneio.' });
  }
};

// PUT /participacoes/:id
export const updateParticipacao = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { atletaId, torneioId } = req.body;

  try {
    const atualizada = await prisma.participacao.update({
      where: { id: Number(id) },
      data: { atletaId, torneioId }
    });

    return res.status(200).json(atualizada);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao atualizar participação.' });
  }
};

// DELETE /participacoes/:id
export const deleteParticipacao = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.participacao.delete({ where: { id: Number(id) } });
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao excluir participação.' });
  }
};
