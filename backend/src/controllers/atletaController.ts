// 📁 backend/src/controllers/atletaController.ts

import { Request, Response } from 'express';
import prisma from '../lib/prismaClient';

// [POST] Criar novo atleta e inscrever em torneio (público)
export const createAtleta = async (req: Request, res: Response) => {
  const { nome, email, genero, nivel } = req.body;

  if (!nome || !email || !genero || !nivel) {
    return res.status(400).json({ message: 'Dados obrigatórios faltando.' });
  }

  try {
    let atleta = await prisma.atleta.findUnique({ where: { email } });

    const torneio = await prisma.torneio.findFirst({
      where: { status: 'aberto' },
    });

    if (!torneio) {
      return res.status(400).json({ message: 'Nenhum torneio ativo disponível.' });
    }

    if (atleta) {
      const participacaoExistente = await prisma.participacao.findFirst({
        where: {
          atletaId: atleta.id,
          torneioId: torneio.id,
        },
      });

      if (participacaoExistente) {
        return res.status(409).json({ message: 'Você já está inscrito neste torneio.' });
      }
    } else {
      atleta = await prisma.atleta.create({
        data: { nome, email, genero, nivel },
      });
    }

    const participacao = await prisma.participacao.create({
      data: {
        atletaId: atleta.id,
        torneioId: torneio.id,
      },
    });

    return res.status(201).json({
      message: 'Inscrição realizada com sucesso.',
      atleta,
      participacao,
    });
  } catch (error) {
    console.error('Erro ao inscrever atleta:', error);
    return res.status(500).json({ message: 'Erro interno ao inscrever atleta.' });
  }
};

// [GET] Listar todos os atletas com participação (pode filtrar por torneio)
export const getAllAtletas = async (req: Request, res: Response) => {
  try {
    const torneioId = req.params.id;

    const whereClause = torneioId
      ? {
          participacoes: {
            some: { torneioId: Number(torneioId) },
          },
        }
      : {
          participacoes: {
            some: {}, // qualquer participação
          },
        };

    const atletas = await prisma.atleta.findMany({
      where: whereClause,
      include: {
        participacoes: true,
      },
    });

    return res.status(200).json(atletas);
  } catch (error: any) {
    console.error('Erro ao listar atletas:', error);
    return res.status(500).json({ message: 'Erro ao buscar atletas.' });
  }
};

// [GET] Buscar atleta por ID
export const getAtletaById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ message: 'ID do atleta inválido.' });
  }

  try {
    const atleta = await prisma.atleta.findUnique({
      where: { id: Number(id) },
    });

    if (!atleta) {
      return res.status(404).json({ message: 'Atleta não encontrado.' });
    }

    return res.status(200).json(atleta);
  } catch (error) {
    console.error('Erro ao buscar atleta:', error);
    return res.status(500).json({ message: 'Erro ao buscar atleta.' });
  }
};

// [PUT] Atualizar atleta
export const updateAtleta = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, email, genero, nivel } = req.body;

  try {
    const atletaAtualizado = await prisma.atleta.update({
      where: { id: Number(id) },
      data: { nome, email, genero, nivel },
    });

    return res.status(200).json(atletaAtualizado);
  } catch (error) {
    console.error('Erro ao atualizar atleta:', error);
    return res.status(500).json({ message: 'Erro ao atualizar atleta.' });
  }
};

// [DELETE] Deletar atleta
export const deleteAtleta = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.atleta.delete({
      where: { id: Number(id) },
    });

    return res.status(200).json({ message: 'Atleta deletado com sucesso.' });
  } catch (error) {
    console.error('Erro ao deletar atleta:', error);
    return res.status(500).json({ message: 'Erro ao deletar atleta.' });
  }
};
