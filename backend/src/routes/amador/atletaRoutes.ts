// ROTA: /api/amador/atletas

import { Router, RequestHandler } from 'express';
import {
  createAtleta,
  listarAtletas,
  getAtletaById,
  updateAtleta,
  deleteAtleta
} from '../../controllers/amador/atletaController';

const router = Router();

// [POST] Criar novo atleta
router.post('/', createAtleta as unknown as RequestHandler);

// [GET] Listar todos os atletas
router.get('/', listarAtletas as unknown as RequestHandler);

// [GET] Buscar atleta por ID
router.get('/:id', getAtletaById as unknown as RequestHandler);

// [PUT] Atualizar atleta por ID
router.put('/:id', updateAtleta as unknown as RequestHandler);

// [DELETE] Deletar atleta por ID
router.delete('/:id', deleteAtleta as unknown as RequestHandler);

export default router;
