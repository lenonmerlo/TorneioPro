import { Request, Response } from 'express';
import prisma from '../../lib/prismaClient';

// Listar torneios
export const getTorneios = async (req: Request, res: Response): Promise<void> => {
  try {
    const torneios = await prisma.torneio.findMany({
      include: { criadoPor: true },
    });
    res.json(torneios);
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao listar torneios', detalhe: error.message });
  }
};

// Criar torneio
export const createTorneio = async (req: Request, res: Response): Promise<void> => { // <-- Mudei aqui
  try {
    const { nome, tipo, data, local, criadoPorId } = req.body;

    if (!nome || !tipo || !data || !criadoPorId) {
      res.status(400).json({ erro: 'Campos obrigatórios: nome, tipo, data, criadoPorId' });
      return; // Adicionei 'return' para parar a execução após enviar a resposta
    }

    const novoTorneio = await prisma.torneio.create({
      data: {
        nome,
        tipo,
        data: new Date(data),
        local,
        criadoPorId,
      },
    });

    res.status(201).json(novoTorneio);
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao criar torneio', detalhe: error.message });
  }
};

// Atualizar torneio
export const updateTorneio = async (req: Request, res: Response): Promise<void> => { // <-- Mudei aqui
  const id = Number(req.params.id);
  const { nome, tipo, data, local, status } = req.body;

  try {
    const torneioAtualizado = await prisma.torneio.update({
      where: { id },
      data: {
        nome,
        tipo,
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

// Deletar torneio
export const deleteTorneio = async (req: Request, res: Response): Promise<void> => { // <-- Mudei aqui
  const id = Number(req.params.id);
  try {
    await prisma.torneio.delete({ where: { id } });
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao deletar torneio', detalhe: error.message });
  }
};