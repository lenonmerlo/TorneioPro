// ROTA BASE: /api/oficial/equipes

import { Router, RequestHandler } from 'express';
import {
  criarEquipe,
  listarTodasEquipes,
  listarEquipesPorTorneio,
  buscarEquipePorId,
  atualizarEquipe,
  deletarEquipe
} from '../../controllers/oficial/equipeOficialController';

const router = Router();

// [GET] Listar todas as equipes oficiais
router.get('/', listarTodasEquipes as unknown as RequestHandler);

// [GET] Listar equipes por torneio
router.get('/torneio/:torneioId', listarEquipesPorTorneio as unknown as RequestHandler);

// [GET] Buscar equipe por ID
router.get('/:id', buscarEquipePorId as unknown as RequestHandler);

// [POST] Criar nova equipe
router.post('/', criarEquipe as unknown as RequestHandler);

// [PUT] Atualizar equipe
router.put('/:id', atualizarEquipe as unknown as RequestHandler);

// [DELETE] Deletar equipe
router.delete('/:id', deletarEquipe as unknown as RequestHandler);

export default router;
