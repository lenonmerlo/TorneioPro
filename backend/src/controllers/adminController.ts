// backend/src/controllers/adminController.ts

import { Request, Response } from 'express';
import prisma from '../lib/prismaClient';

export const getDashboardResumo = async (req: Request, res: Response) => {
  try {
    const [
      totalParticipacoesIndividuais,
      totalEquipesFormadas,
      totalPartidasIndividuais,
      totalPartidasEmEquipe,
      torneios,
      ultimasPartidasIndividuais
    ] = await Promise.all([
      prisma.participacao.count(),

      prisma.equipe.count({
        where: {
          tipo: {
            in: ['dupla', 'trio', 'quarteto']
          }
        }
      }),

      prisma.partida.count({
        where: {
          OR: [
            { equipe1: { tipo: 'individual' } },
            { equipe2: { tipo: 'individual' } }
          ]
        }
      }),

      prisma.partida.count({
        where: {
          OR: [
            { equipe1: { tipo: { in: ['dupla', 'trio', 'quarteto'] } } },
            { equipe2: { tipo: { in: ['dupla', 'trio', 'quarteto'] } } }
          ]
        }
      }),

      prisma.torneio.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
        select: {
          id: true,
          nome: true,
          status: true,
          data: true
        }
      }),

      prisma.partida.findMany({
        where: {
          OR: [
            { equipe1: { tipo: 'individual' } },
            { equipe2: { tipo: 'individual' } }
          ]
        },
        orderBy: { createdAt: 'desc' },
        take: 5,
        select: {
          id: true,
          pontosEquipe1: true,
          pontosEquipe2: true,
          vencedorId: true,
          equipe1: { select: { nome: true, id: true } },
          equipe2: { select: { nome: true, id: true } }
        }
      })
    ]);

    const ultimosResultados = ultimasPartidasIndividuais.map((p) => ({
      partidaId: p.id,
      torneio: 'Individual',
      equipe1: p.equipe1?.nome,
      equipe2: p.equipe2?.nome,
      pontosEquipe1: p.pontosEquipe1,
      pontosEquipe2: p.pontosEquipe2,
      vencedor:
        p.vencedorId === p.equipe1?.id
          ? p.equipe1?.nome
          : p.vencedorId === p.equipe2?.id
          ? p.equipe2?.nome
          : null
    }));

    return res.status(200).json({
      totalParticipacoesIndividuais,
      totalEquipesFormadas,
      totalPartidasIndividuais,
      totalPartidasEmEquipe,
      torneiosRecentes: torneios,
      ultimosResultados
    });
  } catch (error) {
    console.error('Erro ao gerar dashboard:', error);
    return res.status(500).json({ message: 'Erro ao gerar dados do dashboard.' });
  }
};

export const getTorneios = async (req: Request, res: Response) => {
  try {
    const torneios = await prisma.torneio.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        nome: true,
        status: true,
        data: true,
        createdAt: true
      }
    });
    res.status(200).json(torneios);
  } catch (error) {
    console.error('Erro ao buscar torneios:', error);
    res.status(500).json({ message: 'Erro ao buscar torneios.' });
  }
};
