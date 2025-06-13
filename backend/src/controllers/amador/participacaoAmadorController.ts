// 📁 backend/src/controllers/amador/participacaoAmadorController.ts
import { Request, Response } from 'express';
import prisma from '../../lib/prismaClient';

// POST /torneio-amador/inscricao
export const createParticipacaoAmador = async (req: Request, res: Response) => {
  const { atletaId, torneioId } = req.body;
  if (!atletaId || !torneioId) {
    return res.status(400).json({ message: 'IDs de atleta e torneio são obrigatórios.' });
  }

  try {
    const torneio = await prisma.torneio.findUnique({ where: { id: torneioId } });
    if (!torneio || torneio.tipo !== 'amador') {
      return res.status(404).json({ message: 'Torneio amador não encontrado ou tipo incorreto.' });
    }

    const participacaoExistente = await prisma.participacaoAmador.findUnique({
      where: { atletaId_torneioId: { atletaId, torneioId } }
    });
    if (participacaoExistente) {
      return res.status(409).json({ message: 'Atleta já inscrito neste torneio.' });
    }

    const nova = await prisma.participacaoAmador.create({
      data: { atletaId, torneioId }
    });

    return res.status(201).json(nova);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno ao criar inscrição.' });
  }
};

// GET /torneio-amador/inscritos/:torneioId
export const getInscritosAmador = async (req: Request, res: Response) => {
  const { torneioId } = req.params;
  try {
    const inscritos = await prisma.participacaoAmador.findMany({
      where: { torneioId: Number(torneioId) },
      include: { atleta: true }
    });
    return res.json(inscritos);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao listar inscritos.' });
  }
};

// PUT /torneio-amador/inscricao/:id
export const updateInscricaoAmador = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { atletaId, torneioId } = req.body;
  try {
    const atualizada = await prisma.participacaoAmador.update({
      where: { id: Number(id) },
      data: { atletaId, torneioId }
    });
    return res.json(atualizada);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar inscrição.' });
  }
};

// DELETE /torneio-amador/inscricao/:id
export const deleteInscricaoAmador = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.participacaoAmador.delete({ where: { id: Number(id) } });
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao remover inscrição.' });
  }
};
