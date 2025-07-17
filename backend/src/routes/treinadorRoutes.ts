
import { Router, RequestHandler } from 'express';
import {
  getTreinadores,
  getTreinadorById,
  createTreinador,
  updateTreinador,
  deleteTreinador
} from '../controllers/treinadorController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authMiddleware, getTreinadores as unknown as RequestHandler);
router.get('/:id', authMiddleware, getTreinadorById as unknown as RequestHandler);
router.post('/', authMiddleware, createTreinador as unknown as RequestHandler);
router.put('/:id', authMiddleware, updateTreinador as unknown as RequestHandler);
router.delete('/:id', authMiddleware, deleteTreinador as unknown as RequestHandler);

export default router;
