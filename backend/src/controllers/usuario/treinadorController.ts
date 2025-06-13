// 📁 backend/src/controllers/usuario/treinadorController.ts
// Rotas para gerenciar usuários com perfil 'treinador'

import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import prisma from '../../lib/prismaClient';

// GET /treinadores
export const getTreinadores = async (_req: Request, res: Response) => {
  try {
    const treinadores = await prisma.usuario.findMany({
      where: { perfil: 'treinador' },
      select: {
        id: true,
        nome: true,
        email: true,
        criadoEm: true
      }
    });
    res.json(treinadores);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar treinadores.' });
  }
};

// GET /treinadores/:id
export const getTreinadorById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const treinador = await prisma.usuario.findFirst({
      where: { id: Number(id), perfil: 'treinador' },
      select: {
        id: true,
        nome: true,
        email: true,
        criadoEm: true
      }
    });
    if (!treinador) return res.status(404).json({ message: 'Treinador não encontrado.' });
    res.json(treinador);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar treinador.' });
  }
};

// POST /treinadores
export const createTreinador = async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    const hashed = await bcrypt.hash(senha, 10);
    const novoTreinador = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha: hashed,
        perfil: 'treinador'
      }
    });
    res.status(201).json(novoTreinador);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar treinador.' });
  }
};

// PUT /treinadores/:id
export const updateTreinador = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  try {
    const atualizado = await prisma.usuario.update({
      where: { id: Number(id) },
      data: {
        nome,
        email
      }
    });
    res.json(atualizado);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar treinador.' });
  }
};

// DELETE /treinadores/:id
export const deleteTreinador = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.usuario.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar treinador.' });
  }
};
