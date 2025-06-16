import { Request, Response } from 'express';
import prisma from '../../lib/prismaClient';

export const getDashboardResumo = async (req: Request, res: Response) => {
  try {
    const [
      totalAtletasAmador,
      totalEquipesOficial,
      totalPartidasAmador,
      totalPartidasOficial,
      torneios,
      ultimasPartidas
    ] = await Promise.all([
      prisma.participacaoAmador.count(),
      prisma.equipeOficial.count(),
      prisma.partida.count({ where: { equipeAmador1Id: { not: null } } }),
      prisma.partida.count({ where: { equipeOficial1Id: { not: null } } }),
      prisma.torneio.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
        select: { id: true, nome: true, tipo: true, status: true, data: true }
      }),
      prisma.partida.findMany({
        where: { equipeAmador1Id: { not: null } },
        orderBy: { createdAt: 'desc' },
        take: 5,
        include: {
          equipeAmador1: true,
          equipeAmador2: true
        }
      })
    ]);

    const ultimosResultados = ultimasPartidas.map((p) => ({
      partidaId: p.id,
      torneio: 'Amador',
      equipe1: p.equipeAmador1?.nome,
      equipe2: p.equipeAmador2?.nome,
      pontosEquipe1: p.pontosEquipe1,
      pontosEquipe2: p.pontosEquipe2,
      vencedor:
        p.vencedorId === p.equipeAmador1Id
          ? p.equipeAmador1?.nome
          : p.vencedorId === p.equipeAmador2Id
          ? p.equipeAmador2?.nome
          : null
    }));

    res.status(200).json({
      totalAtletasAmador,
      totalEquipesOficial,
      totalPartidasAmador,
      totalPartidasOficial,
      torneiosRecentes: torneios,
      ultimosResultados
    });
  } catch (error) {
    console.error('Erro ao gerar dashboard:', error);
    res.status(500).json({ message: 'Erro ao gerar dados do dashboard.' });
  }
};
