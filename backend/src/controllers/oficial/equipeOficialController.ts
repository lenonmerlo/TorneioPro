import { Request, Response } from 'express';
import prisma from '@/lib/prismaClient';

// Criar equipe oficial (dupla, trio, quarteto)
export const criarEquipeOficial = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nome, tipo, atletas } = req.body;

    if (!nome || !tipo || !Array.isArray(atletas) || atletas.length === 0) {
      res.status(400).json({ erro: 'Nome, tipo e atletas são obrigatórios.' });
      return;
    }

    const equipe = await prisma.equipeOficial.create({
      data: {
        nome,
        tipo,
        atletas: {
          create: atletas
        }
      },
      include: { atletas: true }
    });

    res.status(201).json(equipe);
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao criar equipe oficial', detalhe: error.message });
  }
};

// Listar equipes oficiais
export const listarEquipesOficiais = async (req: Request, res: Response): Promise<void> => {
  try {
    const { tipo } = req.query;

    const equipes = await prisma.equipeOficial.findMany({
      where: tipo ? { tipo: String(tipo) } : {},
      include: { atletas: true },
      orderBy: { id: 'asc' }
    });

    res.json(equipes);
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao listar equipes oficiais', detalhe: error.message });
  }
};


// Deletar equipe oficial por ID
export const deletarEquipeOficial = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  try {
    await prisma.equipeOficial.delete({ where: { id } });
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao deletar equipe oficial', detalhe: error.message });
  }
};
