// 📁 backend/src/controllers/usuario/authController.ts
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../../lib/prismaClient';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

// POST /auth/register
export const createRegister = async (req: Request, res: Response) => {
  const { nome, email, senha, perfil } = req.body;

  if (!nome || !email || !senha || !perfil) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  } 

  try {
    const hashed = await bcrypt.hash(senha, 10);

    const novoUsuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha: hashed,
        perfil,
      },
    });

    // Se perfil for atleta, criar Atleta vinculado
    if (perfil === 'atleta') {
      await prisma.atleta.create({
        data: {
          nome,
          email,
          genero: '', // preencher no front depois
          nivel: '',  // preencher no front depois
          usuario: { connect: { id: novoUsuario.id } }
        }
      });
    }

    res.status(201).json({ message: 'Usuário criado com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao registrar usuário.' });
  }
};

// POST /auth/login
export const createLogin = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
  }

  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } });

    if (!usuario) {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (!senhaCorreta) {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    const token = jwt.sign(
      {
        id: usuario.id,
        email: usuario.email,
        perfil: usuario.perfil,
      },
      JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.status(200).json({
      token,
      nome: usuario.nome,
      perfil: usuario.perfil
      });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao realizar login.' });
  }
};
