import { Router, RequestHandler } from 'express';
import {
  createParticipacao,
  getTodasParticipacoes,
  getParticipacoesPorTorneio,
  updateParticipacao,
  deleteParticipacao
} from '../controllers/participacaoController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/', createParticipacao as unknown as RequestHandler);
router.get('/', getTodasParticipacoes as unknown as RequestHandler); 
router.get('/:torneioId', getParticipacoesPorTorneio as unknown as RequestHandler); 
router.put('/:id', authMiddleware, updateParticipacao as unknown as RequestHandler);
router.delete('/:id', authMiddleware, deleteParticipacao as unknown as RequestHandler);

export default router;
