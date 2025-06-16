import express from 'express';
import {
  getTorneios,
  createTorneio,
  updateTorneio,
  deleteTorneio,
} from '../../controllers/usuario/torneioController';
import { authMiddleware } from '../../middlewares/authMiddleware';

const router = express.Router();

router.get('/', getTorneios);
router.post('/', authMiddleware, createTorneio);
router.put('/:id', updateTorneio);
router.delete('/:id', deleteTorneio);

export default router;
