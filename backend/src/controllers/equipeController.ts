// 📁 backend/src/controllers/equipeController.ts
// Rotas para gerenciar equipes (modelo unificado)

import { Request, Response } from 'express';
import prisma from '../lib/prismaClient';

// [GET] Listar equipes por torneio
export const listarEquipes = async (req: Request, res: Response) => {
  const { torneioId } = req.params;

  try {
    const equipes = await prisma.equipe.findMany({
      where: { torneioId: Number(torneioId) },
      include: {
        atletas: {
          include: {
            atleta: true
          }
        }
      }
    });

    return res.status(200).json(equipes);
  } catch (error) {
    console.error('Erro ao listar equipes:', error);
    return res.status(500).json({ message: 'Erro interno ao listar equipes.' });
  }
};

// [GET] Buscar equipe por ID
export const getEquipeById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const equipe = await prisma.equipe.findUnique({
      where: { id: Number(id) },
      include: {
        atletas: {
          include: {
            atleta: true
          }
        }
      }
    });

    if (!equipe) return res.status(404).json({ message: 'Equipe não encontrada.' });

    return res.status(200).json(equipe);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar equipe.' });
  }
};

// [POST] Criar equipe manualmente
export const criarEquipe = async (req: Request, res: Response) => {
  const { nome, tipo, torneioId, atletasIds } = req.body;

  if (!nome || !tipo || !torneioId || !Array.isArray(atletasIds)) {
    return res.status(400).json({ message: 'Campos obrigatórios: nome, tipo, torneioId, atletasIds (array)' });
  }

  try {
    const novaEquipe = await prisma.equipe.create({
      data: {
        nome,
        tipo,
        torneio: { connect: { id: Number(torneioId) } },
        atletas: {
          create: atletasIds.map((id: number) => ({
            atleta: { connect: { id } }
          }))
        }
      }
    });

    return res.status(201).json(novaEquipe);
  } catch (error) {
    console.error('Erro ao criar equipe:', error);
    return res.status(500).json({ message: 'Erro interno ao criar equipe.' });
  }
};

// [PUT] Atualizar equipe
export const atualizarEquipe = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, tipo } = req.body;

  try {
    const equipe = await prisma.equipe.update({
      where: { id: Number(id) },
      data: {
        nome,
        tipo
      }
    });

    return res.status(200).json(equipe);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar equipe.' });
  }
};

// [DELETE] Deletar equipe
export const deletarEquipe = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.equipe.delete({
      where: { id: Number(id) }
    });

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao deletar equipe.' });
  }
};
