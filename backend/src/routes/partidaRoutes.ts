
import { Router, RequestHandler } from 'express';
import {
  criarPartida,
  listarTodasPartidas,
  listarPartidasPorTorneio,
  atualizarPlacarPartida,
  deletarPartida,
  definirVencedoresAutomaticamente
} from '../controllers/partidaController';

const router = Router();

router.post('/', criarPartida as unknown as RequestHandler);
router.get('/', listarTodasPartidas as unknown as RequestHandler);
router.get('/torneio/:torneioId', listarPartidasPorTorneio as unknown as RequestHandler);
router.put('/:id', atualizarPlacarPartida as unknown as RequestHandler);
router.delete('/:id', deletarPartida as unknown as RequestHandler);
router.get('/definir-vencedores', definirVencedoresAutomaticamente as unknown as RequestHandler);

export default router;
