import express, { RequestHandler } from 'express';
import {
  getTorneios,
  createTorneio,
  updateTorneio,
  deleteTorneio,
  getTorneioAtivo,
} from '../../controllers/usuario/torneioController';
import { authMiddleware } from '../../middlewares/authMiddleware';

const router = express.Router();

router.get('/', getTorneios);
router.get('/ativo', authMiddleware, getTorneioAtivo as unknown as RequestHandler);
router.post('/', authMiddleware, createTorneio);
router.put('/:id', updateTorneio);
router.delete('/:id', deleteTorneio);

export default router;
