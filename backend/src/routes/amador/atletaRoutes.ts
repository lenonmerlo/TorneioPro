// backend/src/routes/amador/atletaRoutes.ts

import { RequestHandler, Router } from 'express';
import {
  createAtleta,
  getAllAtletas,
  getAtletaById,
  updateAtleta,
  deleteAtleta
} from '../../controllers/amador/atletaController';

import { authMiddleware } from '../../middlewares/authMiddleware';

const router = Router();

/**
 * ROTAS PÚBLICAS (acessadas por atletas via /participar ou /torneio-amador)
 */

// [POST] Inscrição pública no torneio amador (sem autenticação)
router.post('/', createAtleta as unknown as RequestHandler);

// [GET] Buscar atletas vinculados a um torneio (público)
router.get('/torneio/:id', getAllAtletas as unknown as RequestHandler);

/**
 * ROTAS ADMINISTRATIVAS (restritas ao treinador, com token JWT)
 */

// [GET] Listar todos os atletas (admin)
router.get('/', authMiddleware, getAllAtletas as unknown as RequestHandler);

// [GET] Buscar atleta por ID (admin)
router.get('/:id', authMiddleware, getAtletaById as unknown as RequestHandler);

// [PUT] Atualizar atleta por ID (admin)
router.put('/:id', authMiddleware, updateAtleta as unknown as RequestHandler);

// [DELETE] Deletar atleta por ID (admin)
router.delete('/:id', authMiddleware, deleteAtleta as unknown as RequestHandler);

export default router;
