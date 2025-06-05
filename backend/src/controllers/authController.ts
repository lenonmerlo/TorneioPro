import { Request, Response, RequestHandler } from 'express';
import prisma from '@/lib/prismaClient';
import bcrypt from 'bcrypt';
import { gerarToken } from '@/utils/jwt';

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, senha } = req.body;

  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } });
    if (!usuario) {
      res.status(404).json({ erro: 'Usuário não encontrado' });
      return;
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      res.status(401).json({ erro: 'Senha inválida' });
      return;
    }

    const token = gerarToken({ id: usuario.id, perfil: usuario.perfil });
    res.json({ token, perfil: usuario.perfil, nome: usuario.nome });
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro no login', detalhe: error.message });
  }
};


export const registrar = async (req: Request, res: Response): Promise<void> => {

  const { nome, email, senha, perfil } = req.body;

  try {
    const senhaHash = await bcrypt.hash(senha, 10);
    const usuario = await prisma.usuario.create({
      data: { nome, email, senha: senhaHash, perfil }
    });

    const token = gerarToken({ id: usuario.id, perfil: usuario.perfil });
    res.status(201).json({ token, perfil: usuario.perfil, nome: usuario.nome });
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao registrar', detalhe: error.message });
  }
};
