import { Request, Response } from 'express';
import { gerarChavesQuartetos } from '@/utils/gerarChavesQuartetos';

export const sortearChavesQuartetos = async (req: Request, res: Response): Promise<void> => {
  try {
    const { quartetos } = req.body;

    if (!quartetos || !Array.isArray(quartetos)) {
      res.status(400).json({ erro: 'Lista de quartetos inválida.' });
      return;
    }

    const chaves = gerarChavesQuartetos(quartetos);
    res.status(200).json(chaves);
  } catch (error: any) {
    res.status(500).json({ erro: 'Erro ao sortear chaves', detalhe: error.message });
  }
};
