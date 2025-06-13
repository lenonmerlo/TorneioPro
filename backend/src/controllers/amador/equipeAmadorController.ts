// backend/src/controllers/amador/equipeAmadorController.ts
import { Request, Response } from 'express';
import prisma from '../../lib/prismaClient';

// GET /equipes-amador/:torneioId
export const getEquipesAmador = async (req: Request, res: Response) => {
  const { torneioId } = req.params;
  const idDoTorneio = parseInt(torneioId);

  if (isNaN(idDoTorneio)) {
    return res.status(400).json({ message: 'ID do torneio inválido. Deve ser um número.' });
  }

  try {
    const torneio = await prisma.torneio.findUnique({
      where: { id: idDoTorneio },
      select: { tipo: true }
    });

    if (!torneio) {
      return res.status(404).json({ message: 'Torneio não encontrado.' });
    }
    if (torneio.tipo !== 'amador') {
      return res.status(400).json({ message: 'O ID fornecido não pertence a um torneio amador.' });
    }

    const equipes = await prisma.equipeAmador.findMany({
      where: {
        torneioId: idDoTorneio,
      },
      include: {
        membros: {
          select: {
            id: true,
            nome: true,
            genero: true,
            nivel: true,
          }
        },
      },
      orderBy: {
        nome: 'asc',
      },
    });

    return res.status(200).json(equipes);
  } catch (error) {
    console.error('Erro ao listar equipes do Torneio Amador:', error);
    return res.status(500).json({ message: 'Erro interno ao buscar equipes do torneio amador.' });
  }
};