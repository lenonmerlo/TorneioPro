// 📁 backend/src/controllers/amador/atletaController.ts

import { Request, Response } from 'express';
import prisma from '../../lib/prismaClient';

// [POST] Criar novo atleta
export const createAtleta = async (req: Request, res: Response) => {
  const { nome, email, genero, nivel } = req.body;
  const usuarioId = req.user?.id; // vindo do token JWT

  if (!nome || !email || !genero || !usuarioId) {
    return res.status(400).json({ message: 'Dados obrigatórios faltando.' });
  }

  try {
    const novoAtleta = await prisma.atleta.create({
      data: {
        nome,
        email,
        genero,
        nivel,
        usuario: { connect: { id: usuarioId } },
      },
    });

    return res.status(201).json(novoAtleta);
  } catch (error) {
    console.error('Erro ao criar atleta:', error);
    return res.status(500).json({ message: 'Erro interno ao criar atleta.' });
  }
};

// [GET] Listar todos os atletas
export const listarAtletas = async (_req: Request, res: Response) => {
  try {
    const atletas = await prisma.atleta.findMany();
    return res.status(200).json(atletas);
  } catch (error) {
    console.error('Erro ao listar atletas:', error);
    return res.status(500).json({ message: 'Erro ao buscar atletas.' });
  }
};

// [GET] Buscar atleta por ID
export const getAtletaById = async (req: Request, res: Response) => {
  const { id } = req.params;

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
