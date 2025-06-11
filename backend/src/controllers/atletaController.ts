import { Request, Response } from 'express';
import prisma from '@/lib/prismaClient';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

// Extensão da Request para incluir o usuário injetado pelo middleware de autenticação
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        perfil: string;
      };
    }
  }
}

// Cria um novo atleta, com vínculo obrigatório a um usuarioId existente.
// Esta função seria usada por um treinador/admin para cadastrar um atleta manualmente,
// mas ele precisa indicar a qual usuário (já existente) este atleta pertence.
export const criarAtleta = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nome, email, genero, nivel, equipeId, usuarioId } = req.body; // Agora recebe usuarioId

    // Validação: usuarioId é obrigatório devido ao schema
    if (usuarioId === undefined) {
      res.status(400).json({ erro: 'ID do usuário (usuarioId) é obrigatório para criar um atleta.' });
      return;
    }

    // Busca o usuário pelo usuarioId para verificar sua existência e obter o email
    const usuario = await prisma.usuario.findUnique({ where: { id: usuarioId } });
    if (!usuario) {
      res.status(404).json({ erro: 'Usuário associado ao usuarioId não encontrado.' });
      return;
    }

    // Verifica se já existe um perfil de atleta para este usuarioId
    const atletaExistenteParaUsuario = await prisma.atleta.findUnique({
      where: { usuarioId: usuarioId },
    });

    if (atletaExistenteParaUsuario) {
      res.status(409).json({ erro: 'Já existe um perfil de atleta para este usuário. Use a rota de atualização de perfil.' });
      return;
    }

    const atleta = await prisma.atleta.create({
      data: {
        nome,
        email: usuario.email, // Usa o email do usuário associado
        genero,
        nivel,
        // CORREÇÃO AQUI: Usa 'connect' para vincular o atleta ao usuário
        usuario: { connect: { id: usuarioId } },
        equipe: equipeId ? { connect: { id: equipeId } } : undefined
      }
    });

    res.status(201).json(atleta);
  } catch (error: any) {
    console.error('Erro ao criar atleta (criarAtleta):', error);
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002' && error.meta?.target === 'Atleta_usuarioId_key') {
      res.status(409).json({ erro: 'Este usuário já possui um perfil de atleta cadastrado.' });
    } else {
      res.status(500).json({ erro: 'Erro ao criar atleta', detalhe: error.message });
    }
  }
};

// Esta função é para o USUÁRIO LOGADO criar ou atualizar SEU PRÓPRIO perfil de atleta.
// O usuarioId é extraído do token JWT via authMiddleware, não do corpo da requisição.
export const criarOuAtualizarPerfilAtleta = async (req: Request, res: Response): Promise<void> => {
  // O userId vem do token JWT, injetado pelo authMiddleware
  const userId = req.user?.id;
  const { nome, genero, nivel } = req.body;

  if (!userId) {
    res.status(401).json({ erro: 'Usuário não autenticado.' });
    return;
  }

  // Validações básicas dos campos recebidos
  if (!nome || !genero || !nivel) {
    res.status(400).json({ erro: 'Nome, gênero e nível são obrigatórios para o perfil do atleta.' });
    return;
  }

  try {
    // Busca o usuário para obter o email para o perfil do atleta
    const usuario = await prisma.usuario.findUnique({
      where: { id: userId },
      select: { email: true } // Seleciona apenas o email
    });

    if (!usuario) {
      res.status(404).json({ erro: 'Usuário não encontrado.' });
      return;
    }

    // Tenta encontrar um perfil de atleta já existente para este usuário
    let atleta = await prisma.atleta.findUnique({ where: { usuarioId: userId } });

    if (atleta) {
      // Se o atleta já existe, atualiza o perfil
      atleta = await prisma.atleta.update({
        where: { id: atleta.id },
        data: {
          nome,
          genero,
          nivel,
          email: usuario.email, // Garante que o email do atleta é o mesmo do usuário logado
        }
      });
    } else {
      // Se o atleta não existe, cria um novo perfil de atleta e vincula ao usuário
      atleta = await prisma.atleta.create({
        data: {
          nome,
          genero,
          nivel,
          email: usuario.email, // Usa o email do usuário logado
          // CORREÇÃO AQUI: Usa 'connect' para vincular o atleta ao usuário
          usuario: { connect: { id: userId } }
        }
      });
    }

    res.status(200).json(atleta);
  } catch (error: any) {
    console.error('Erro ao criar ou atualizar perfil de atleta:', error);
    res.status(500).json({ erro: 'Erro ao criar ou atualizar perfil de atleta.', detalhe: error.message });
  }
};


export const listarAtletas = async (_req: Request, res: Response): Promise<void> => {
  try {
    const atletas = await prisma.atleta.findMany({
      include: { equipe: true, usuario: true } // Inclua o usuário para ver a relação
    });

    res.json(atletas);
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao buscar atletas', detalhe: error.message });
  }
};

export const atualizarAtleta = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { nome, genero, nivel, equipeId, email, usuarioId } = req.body;

    // Opcional: Adicione verificação de permissão aqui (se apenas o próprio atleta ou um treinador pode atualizar)

    // Opcional: se o usuarioId for enviado na atualização, verifique a unicidade
    if (usuarioId !== undefined) {
      const atletaComMesmoUsuario = await prisma.atleta.findUnique({
        where: { usuarioId: usuarioId },
      });
      if (atletaComMesmoUsuario && atletaComMesmoUsuario.id !== Number(id)) {
        res.status(409).json({ erro: 'Este ID de usuário já está vinculado a outro atleta.' });
        return;
      }
    }

    // Prepare os dados para atualização, incluindo a relação 'usuario' se 'usuarioId' for fornecido
    const dataToUpdate: any = {
      nome,
      genero,
      nivel,
      equipeId,
      email,
    };

    if (usuarioId !== undefined) {
      dataToUpdate.usuario = { connect: { id: usuarioId } };
    }

    const atletaAtualizado = await prisma.atleta.update({
      where: { id: Number(id) },
      data: dataToUpdate // Usa o objeto de dados preparado
    });

    res.json(atletaAtualizado);
  } catch (error: any) {
    console.error('Erro ao atualizar atleta:', error);
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
      res.status(409).json({ erro: 'Conflito de dados. Verifique o email ou ID do usuário.' });
    } else {
      res.status(500).json({ erro: 'Erro ao atualizar atleta', detalhe: error.message });
    }
  }
};

export const deletarAtleta = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Opcional: Adicione verificação de permissão aqui (e.g., só o próprio atleta ou um treinador pode deletar)

    await prisma.atleta.delete({
      where: { id: Number(id) }
    });

    res.status(204).send(); // No content
  } catch (error: any) {
    console.error('Erro ao deletar atleta:', error);
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        res.status(404).json({ erro: 'Atleta não encontrado para deletar.' });
    } else {
        res.status(500).json({ erro: 'Erro ao deletar atleta', detalhe: error.message });
    }
  }
};
