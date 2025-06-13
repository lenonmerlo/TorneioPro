// src/controllers/oficial/equipeOficialController.ts

// ROTA: /api/oficial/equipes

import { Request, Response } from 'express';
import prisma from '../../lib/prismaClient';

// Criar nova equipe oficial com membros
export const criarEquipeOficial = async (req: Request, res: Response) => {
  const { nome, tipo, torneioId, atletaIds } = req.body;

  if (!nome || !tipo || !torneioId || !Array.isArray(atletaIds)) {
    return res.status(400).json({ message: 'Dados obrigatórios ausentes ou inválidos.' });
  }

  try {
    const novaEquipe = await prisma.equipeOficial.create({
      data: {
        nome,
        tipo,
        torneio: { connect: { id: torneioId } },
        membros: {
          create: atletaIds.map((atletaId: number) => ({
            atleta: { connect: { id: atletaId } },
          })),
        },
      },
      include: {
        membros: {
          include: {
            atleta: true, // para trazer dados do atleta na resposta
          },
        },
      },
    });

    return res.status(201).json(novaEquipe);
  } catch (error) {
    console.error('Erro ao criar equipe oficial:', error);
    return res.status(500).json({ message: 'Erro interno ao criar equipe oficial.' });
  }
};

// Listar todas as equipes oficiais de um torneio
export const listarEquipesOficiais = async (req: Request, res: Response) => {
  const { torneioId } = req.params;

  try {
    const equipes = await prisma.equipeOficial.findMany({
      where: {
        torneioId: parseInt(torneioId),
      },
      include: {
        membros: {
          include: {
            atleta: true,
          },
        },
      },
    });

    return res.status(200).json(equipes);
  } catch (error) {
    console.error('Erro ao listar equipes oficiais:', error);
    return res.status(500).json({ message: 'Erro ao buscar equipes.' });
  }
};

// Deletar equipe oficial por ID
export const deletarEquipeOficial = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.equipeOficial.delete({
      where: { id: parseInt(id) },
    });

    return res.status(200).json({ message: 'Equipe oficial deletada com sucesso.' });
  } catch (error) {
    console.error('Erro ao deletar equipe oficial:', error);
    return res.status(500).json({ message: 'Erro ao deletar equipe.' });
  }
};
