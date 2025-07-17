import prisma from "../lib/prismaClient"
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';


// GET - Treinadores
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
    res.status(200).json(treinadores);
  } catch (error) {
    console.error('Erro ao listar treinadores: ', error);
    res.status(500).json({ message: 'Erro ao listar treinadores.'});
  }
};

// [GET] Buscar treinador por ID
export const getTreinadorById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const treinador = await prisma.usuario.findFirst({
      where: { id, perfil: 'treinador' },
      select: {
        id: true,
        nome: true,
        email: true,
        criadoEm: true
      }
    });

    if (!treinador) {
      return res.status(404).json({ message: 'Treinador não encontrado.' });
    }

    res.status(200).json(treinador);
  } catch (error) {
    console.error('Erro ao buscar treinador:', error);
    res.status(500).json({ message: 'Erro ao buscar treinador.' });
  }
};

// [POST] Criar treinador
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
      },
      select: {
        id: true,
        nome: true,
        email: true,
        perfil: true,
        criadoEm: true
      }
    });

    res.status(201).json(novoTreinador);
  } catch (error) {
    console.error('Erro ao criar treinador:', error);
    res.status(500).json({ message: 'Erro ao criar treinador.' });
  }
};

// [PUT] Atualizar treinador
export const updateTreinador = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { nome, email } = req.body;

  try {
    const atualizado = await prisma.usuario.update({
      where: { id },
      data: { nome, email },
      select: {
        id: true,
        nome: true,
        email: true,
        perfil: true,
        criadoEm: true
      }
    });

    res.status(200).json(atualizado);
  } catch (error) {
    console.error('Erro ao atualizar treinador:', error);
    res.status(500).json({ message: 'Erro ao atualizar treinador.' });
  }
};

// [DELETE] Deletar treinador
export const deleteTreinador = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    await prisma.usuario.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar treinador:', error);
    res.status(500).json({ message: 'Erro ao deletar treinador.' });
  }
};