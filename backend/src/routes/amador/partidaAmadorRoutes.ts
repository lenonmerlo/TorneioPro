// ROTA: /api/amador/partidas

import { Router, RequestHandler } from 'express';
import {
  criarPartidaAmador,
  listarPartidasAmadoras,
  atualizarPlacarPartidaAmador,
  definirVencedoresPartidasAmadoras,
  listarTodasPartidasAmadoras
} from '../../controllers/amador/partidaAmadorController';

const router = Router();

// [POST] Criar nova partida do torneio amador
router.post('/', criarPartidaAmador as unknown as RequestHandler);

// [GET] Listar todas as partidas de um torneio amador
router.get('/', listarTodasPartidasAmadoras as unknown as RequestHandler);

// [GET] Listar partidas por id de um torneio amador
router.get('/:torneioId', listarPartidasAmadoras as unknown as RequestHandler);

// [PUT] Atualizar placar de uma partida amadora
router.put('/:id', atualizarPlacarPartidaAmador as unknown as RequestHandler);

// [GET] Definir vencedores automaticamente com base no placar
router.get('/vencedores/definir', definirVencedoresPartidasAmadoras as unknown as RequestHandler);

export default router;
