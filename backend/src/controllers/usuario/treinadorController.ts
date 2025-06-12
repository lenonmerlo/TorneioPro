import { Request, Response } from 'express';
import prisma from '@/lib/prismaClient';
import bcrypt from 'bcrypt';

// Listar todos os treinadores
export const listarTreinadores = async (req: Request, res: Response): Promise<void> => {
  try {
    const treinadores = await prisma.usuario.findMany({
      where: { perfil: 'professor' }
    });
    res.json(treinadores);
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao listar treinadores', detalhe: error.message });
  }
};

// Buscar treinador por ID
export const buscarTreinadorPorId = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  try {
    const treinador = await prisma.usuario.findUnique({ where: { id } });
    if (!treinador || treinador.perfil !== 'professor') {
        res.status(404).json({ erro: "Treinador não encontrado ou perfil incorreto." }); // Melhorar a mensagem de erro
        return; // Adicionar um return aqui para garantir que a execução pare
    }
    res.json(treinador);
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao buscar treinador', detalhe: error.message });
  }
};

// Criar treinador
export const criarTreinador = async (req: Request, res: Response): Promise<void> => { // Alterado para Promise<void>
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      res.status(400).json({ erro: 'Nome, email e senha são obrigatórios.' });
      return; // Adicionar um return aqui para garantir que a execução pare
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    const novoTreinador = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha: senhaHash,
        perfil: 'professor',
      },
    });

    res.status(201).json(novoTreinador);
  } catch (error: unknown) {
    const e = error as Error;
    res.status(500).json({ // Remover o `return` aqui, pois a resposta é enviada e não é um retorno de função para ser usado
      erro: "Erro ao criar treinador",
      detalhe: e.message,
    });
  }
};

// Atualizar treinador
export const atualizarTreinador = async (req: Request, res: Response): Promise<void> => { // Alterado para Promise<void>
  const id = Number(req.params.id);
  const { nome, email, senha } = req.body;
  try {
    const senhaHash = senha ? await bcrypt.hash(senha, 10) : undefined;
    const treinadorAtualizado = await prisma.usuario.update({
      where: { id },
      data: {
        nome,
        email,
        ...(senhaHash && { senha: senhaHash })
      }
    });
    res.json(treinadorAtualizado);
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao atualizar treinador', detalhe: error.message });
  }
};

// Deletar treinador
export const deletarTreinador = async (req: Request, res: Response): Promise<void> => { // Alterado para Promise<void>
  const id = Number(req.params.id);
  try {
    await prisma.usuario.delete({ where: { id } });
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao deletar treinador', detalhe: error.message });
  }
};