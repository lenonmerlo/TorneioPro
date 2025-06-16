// ROTA: /api/oficial/equipes

import { Request, Response } from 'express';
import prisma from '../../lib/prismaClient';

// Criar nova equipe oficial com membros
export const criarEquipe = async (req: Request, res: Response) => {
  const { nome, tipo, torneioId, atletaIds } = req.body;

  if (!nome || !tipo || !torneioId || !Array.isArray(atletaIds)) {
    return res.status(400).json({ message: 'Dados obrigatórios ausentes ou inválidos.' });
  }

  try {
    const equipe = await prisma.equipeOficial.create({
      data: {
        nome,
        tipo,
        torneio: { connect: { id: torneioId } },
        membros: {
          create: atletaIds.map((id: number) => ({
            atleta: { connect: { id } }
          }))
        }
      },
      include: {
        membros: { include: { atleta: true } }
      }
    });

    return res.status(201).json(equipe);
  } catch (error) {
    console.error('Erro ao criar equipe oficial:', error);
    return res.status(500).json({ message: 'Erro interno ao criar equipe.' });
  }
};

// Buscar equipe oficial por ID
export const buscarEquipePorId = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const equipe = await prisma.equipeOficial.findUnique({
      where: { id: parseInt(id) },
      include: {
        membros: { include: { atleta: true } }
      }
    });

    if (!equipe) {
      return res.status(404).json({ message: 'Equipe não encontrada.' });
    }

    return res.status(200).json(equipe);
  } catch (error) {
    console.error('Erro ao buscar equipe:', error);
    return res.status(500).json({ message: 'Erro interno ao buscar equipe.' });
  }
};

// Listar todas as equipes oficiais
export const listarTodasEquipes = async (_req: Request, res: Response) => {
  try {
    const equipes = await prisma.equipeOficial.findMany({
      include: {
        membros: { include: { atleta: true } }
      }
    });

    return res.status(200).json(equipes);
  } catch (error) {
    console.error('Erro ao listar equipes:', error);
    return res.status(500).json({ message: 'Erro interno ao listar equipes.' });
  }
};

// Listar equipes de um torneio específico
export const listarEquipesPorTorneio = async (req: Request, res: Response) => {
  const { torneioId } = req.params;

  try {
    const equipes = await prisma.equipeOficial.findMany({
      where: { torneioId: parseInt(torneioId) },
      include: {
        membros: { include: { atleta: true } }
      }
    });

    return res.status(200).json(equipes);
  } catch (error) {
    console.error('Erro ao listar equipes por torneio:', error);
    return res.status(500).json({ message: 'Erro interno ao listar equipes.' });
  }
};

// Atualizar equipe oficial (nome, tipo e membros)
export const atualizarEquipe = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, tipo, atletaIds } = req.body;

  if (!nome || !tipo || !Array.isArray(atletaIds)) {
    return res.status(400).json({ message: 'Dados inválidos para atualização.' });
  }

  try {
    const equipeAtualizada = await prisma.equipeOficial.update({
      where: { id: parseInt(id) },
      data: {
        nome,
        tipo,
        membros: {
          deleteMany: {}, // Remove todos os vínculos antigos
          create: atletaIds.map((id: number) => ({
            atleta: { connect: { id } }
          }))
        }
      },
      include: {
        membros: { include: { atleta: true } }
      }
    });

    return res.status(200).json(equipeAtualizada);
  } catch (error) {
    console.error('Erro ao atualizar equipe:', error);
    return res.status(500).json({ message: 'Erro interno ao atualizar equipe.' });
  }
};

// Deletar equipe oficial
export const deletarEquipe = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.equipeOficial.delete({
      where: { id: parseInt(id) }
    });

    return res.status(200).json({ message: 'Equipe deletada com sucesso.' });
  } catch (error) {
    console.error('Erro ao deletar equipe:', error);
    return res.status(500).json({ message: 'Erro interno ao deletar equipe.' });
  }
};
