// ROTA: /api/oficial/partidas

import { RequestHandler, Router } from 'express';
import {
  criarPartidaOficial,
  listarPartidasOficiais,
  atualizarPlacarPartidaOficial,
  deletarPartidaOficial,
  definirVencedoresPartidasOficiais
} from '../../controllers/oficial/partidaController';

const router = Router();

router.post('/', criarPartidaOficial as unknown as RequestHandler);
router.get('/:torneioId', listarPartidasOficiais as unknown as RequestHandler);
router.put('/:id', atualizarPlacarPartidaOficial as unknown as RequestHandler);
router.delete('/:id', deletarPartidaOficial as unknown as RequestHandler);
router.get('/vencedores/definir', definirVencedoresPartidasOficiais as unknown as RequestHandler);

export default router
