import { Router } from 'express';
import {
  criarPartida,
  listarPartidas,
  deletarPartida,
  gerarRanking
} from '@/controllers/oficial/partidaController';

const router = Router();

router.post('/', criarPartida);
router.get('/', listarPartidas);
router.get('/ranking', gerarRanking);
router.delete('/:id', deletarPartida);

export default router;
