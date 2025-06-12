import { Request, Response } from 'express';
import prisma from '@/lib/prismaClient';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'; // Importa o erro específico do Prisma

// GET /torneio-amador/inscritos
export const listarInscritosAmador = async (req: Request, res: Response): Promise<void> => {
  try {
    // Busca todas as participações no torneio amador, incluindo os dados do atleta relacionado
    const inscritos = await prisma.participacaoAmador.findMany({
      include: { atleta: true }, // Inclui os dados completos do atleta
    });

    // Mapeia para retornar apenas os dados do atleta para cada inscrição
    // Se a intenção é retornar o registro de participação (com id da participação),
    // remova o .map e retorne 'inscritos' diretamente.
    const atletas = inscritos.map((i) => i.atleta);
    res.json(atletas);
  } catch (error: any) {
    // Em caso de erro, retorna status 500 com mensagem de erro detalhada
    res.status(500).json({ erro: 'Erro ao listar inscritos.', detalhe: error.message });
  }
};

// POST /torneio-amador/inscricao
export const inscreverAtletaNoAmador = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body; // Espera o email do atleta no corpo da requisição

    // Validação: verifica se o email foi fornecido
    if (!email) {
      res.status(400).json({ erro: 'Email do atleta é obrigatório para a inscrição.' });
      return;
    }

    // Busca o atleta pelo email
    const atleta = await prisma.atleta.findUnique({ where: { email } });

    // Validação: verifica se o atleta foi encontrado
    if (!atleta) {
      res.status(404).json({ erro: 'Atleta não encontrado com o email fornecido.' });
      return;
    }

    // Verifica se o atleta já está inscrito no Torneio Amador
    // O 'findUnique' aqui assume que 'atletaId' no modelo 'ParticipacaoAmador' é um campo único.
    // Se um atleta puder ter várias participações (ex: em diferentes edições de torneios amadores),
    // você precisaria de um 'torneioId' aqui e usar 'findFirst' com um WHERE mais específico.
    const jaInscrito = await prisma.participacaoAmador.findUnique({
      where: { atletaId: atleta.id },
    });

    // Validação: impede que o mesmo atleta seja inscrito múltiplas vezes no mesmo torneio amador
    if (jaInscrito) {
      res.status(409).json({ erro: 'Atleta já está inscrito neste Torneio Amador.' });
      return;
    }

    // Cria uma nova inscrição para o atleta no Torneio Amador
    const novaInscricao = await prisma.participacaoAmador.create({
      data: { atletaId: atleta.id }, // Associa a inscrição ao ID do atleta
    });

    // Retorna a nova inscrição com status 201 (Criado)
    res.status(201).json(novaInscricao);
  } catch (error: any) {
    // Em caso de erro, retorna status 500 com mensagem de erro detalhada
    res.status(500).json({ erro: 'Erro ao inscrever atleta no Torneio Amador.', detalhe: error.message });
  }
};

// PUT /torneio-amador/inscricao/:id
export const atualizarInscricaoAmador = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id); // ID da inscrição a ser atualizada
  const { novoAtletaId } = req.body; // Novo ID do atleta para associar a esta inscrição

  try {
    // Validação: verifica se o novoAtletaId foi fornecido
    if (novoAtletaId === undefined) {
      res.status(400).json({ erro: 'O novoAtletaId é obrigatório para atualizar a inscrição.' });
      return;
    }

    // Verifica se a inscrição que está sendo atualizada existe
    const inscricaoExistente = await prisma.participacaoAmador.findUnique({ where: { id } });

    if (!inscricaoExistente) {
      res.status(404).json({ erro: 'Inscrição não encontrada para atualização.' });
      return;
    }

    // Verifica se o novo atleta existe
    const novoAtleta = await prisma.atleta.findUnique({ where: { id: novoAtletaId } });

    if (!novoAtleta) {
      res.status(404).json({ erro: 'Novo atleta não encontrado.' });
      return;
    }

    // Verifica se o novo atleta já está inscrito em outra participação
    // Isso é crucial para evitar que o mesmo atleta ocupe múltiplos slots
    const novoAtletaJaInscrito = await prisma.participacaoAmador.findUnique({
      where: { atletaId: novoAtletaId },
    });

    // Se o novo atleta já está inscrito E não é a mesma inscrição que estamos tentando atualizar,
    // significa que ele já tem uma vaga.
    if (novoAtletaJaInscrito && novoAtletaJaInscrito.id !== id) {
      res.status(409).json({ erro: 'O atleta que você está tentando inserir já está inscrito em outra vaga do Torneio Amador.' });
      return;
    }

    // Atualiza o atleta associado a esta inscrição
    const atualizada = await prisma.participacaoAmador.update({
      where: { id },
      data: { atletaId: novoAtletaId },
    });

    res.json(atualizada);
  } catch (error: any) {
    // Em caso de erro, retorna status 500 com mensagem de erro detalhada
    res.status(500).json({ erro: 'Erro ao atualizar inscrição.', detalhe: error.message });
  }
};

// DELETE /torneio-amador/inscricao/:id
export const removerInscricaoAmador = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id); // ID da inscrição a ser removida

  try {
    // Tenta deletar a inscrição
    await prisma.participacaoAmador.delete({ where: { id } });
    // Se a deleção for bem-sucedida, retorna status 204 (No Content)
    res.status(204).send();
  } catch (error: any) {
    // Se o erro for do tipo 'P2025' (registro não encontrado no delete), retorna 404
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
      res.status(404).json({ erro: 'Inscrição não encontrada para remoção.' });
    } else {
      // Para outros erros, retorna status 500 com mensagem de erro detalhada
      res.status(500).json({ erro: 'Erro ao remover inscrição.', detalhe: error.message });
    }
  }
};
