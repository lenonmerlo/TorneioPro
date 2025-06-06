import { Request, Response } from 'express';
import { sortearQuartetosAmador } from '@/utils/sortearQuartetosAmador';

export const sortearQuartetos = async (req: Request, res: Response): Promise<void> => {
  try {
    const { atletas } = req.body;

    if (!Array.isArray(atletas) || atletas.length === 0) {
      res.status(400).json({ erro: 'Lista de atletas inválida ou vazia.' });
      return;
    }

    const resultado = sortearQuartetosAmador(atletas);
    res.json(resultado);
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao sortear quartetos', detalhe: error.message });
  }
};
