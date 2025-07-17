
import { Router, RequestHandler } from 'express';
import {
  getTorneios,
  getTorneioAtivo,
  createTorneio,
  updateTorneio,
  deleteTorneio
} from '../controllers/torneioController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', getTorneios as unknown as RequestHandler);
router.get('/ativo', getTorneioAtivo as unknown as RequestHandler);
router.post('/', authMiddleware, createTorneio as unknown as RequestHandler);
router.put('/:id', authMiddleware, updateTorneio as unknown as RequestHandler);
router.delete('/:id', authMiddleware, deleteTorneio as unknown as RequestHandler);

export default router;
