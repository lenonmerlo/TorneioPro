// 📁 backend/src/controllers/torneioController.ts

import { Request, Response } from 'express';
import prisma from '../lib/prismaClient';

// [GET] Listar todos os torneios
export const getTorneios = async (req: Request, res: Response): Promise<void> => {
  try {
    const torneios = await prisma.torneio.findMany({
      include: { criadoPor: true },
      orderBy: { createdAt: 'desc' },
    });
    res.json(torneios);
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao listar torneios', detalhe: error.message });
  }
};

// [GET] Buscar torneio com status "aberto"
export const getTorneioAtivo = async (_req: Request, res: Response) => {
  try {
    const torneio = await prisma.torneio.findFirst({
      where: { status: 'aberto' },
      orderBy: { createdAt: 'desc' },
    });

    if (!torneio) {
      return res.status(404).json({ message: 'Nenhum torneio ativo encontrado' });
    }

    return res.status(200).json(torneio);
  } catch (error) {
    console.error('Erro ao buscar torneio ativo:', error);
    return res.status(500).json({ message: 'Erro ao buscar torneio ativo' });
  }
};

// [POST] Criar torneio
export const createTorneio = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nome, data, local } = req.body;
    const criadoPorId = req.user?.id;

    if (!nome || !data || !criadoPorId) {
      res.status(400).json({ erro: 'Campos obrigatórios: nome, data' });
      return;
    }

    const novoTorneio = await prisma.torneio.create({
      data: {
        nome,
        data: new Date(data),
        local,
        status: 'aberto',
        criadoPorId,
      },
    });

    res.status(201).json(novoTorneio);
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao criar torneio', detalhe: error.message });
  }
};

// [PUT] Atualizar torneio
export const updateTorneio = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const { nome, data, local, status } = req.body;

  try {
    const torneioAtualizado = await prisma.torneio.update({
      where: { id },
      data: {
        nome,
        data: data ? new Date(data) : undefined,
        local,
        status,
      },
    });

    res.json(torneioAtualizado);
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao atualizar torneio', detalhe: error.message });
  }
};

// [DELETE] Deletar torneio
export const deleteTorneio = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  try {
    await prisma.torneio.delete({ where: { id } });
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao deletar torneio', detalhe: error.message });
  }
};
