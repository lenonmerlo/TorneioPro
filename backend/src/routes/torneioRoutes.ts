import express from 'express';
import {
  listarTorneios,
  criarTorneio,
  atualizarTorneio,
  deletarTorneio,
} from '@/controllers/torneioController';

const router = express.Router();

router.get('/', listarTorneios);
router.post('/', criarTorneio);
router.put('/:id', atualizarTorneio);
router.delete('/:id', deletarTorneio);

export default router;
