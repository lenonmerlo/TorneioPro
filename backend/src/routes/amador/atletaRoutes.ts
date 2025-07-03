// 📁 backend/src/routes/amador/atletaRoutes.ts

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

// [POST] Inscrição pública no torneio amador (sem autenticação)
router.post('/', createAtleta as unknown as RequestHandler);

// [GET] Listar todos os atletas com participação (admin)
router.get('/', authMiddleware, getAllAtletas as unknown as RequestHandler);

// [GET] Buscar atleta por ID (admin)
router.get('/:id', authMiddleware, getAtletaById as unknown as RequestHandler);

// [PUT] Atualizar atleta por ID (admin)
router.put('/:id', authMiddleware, updateAtleta as unknown as RequestHandler);

// [DELETE] Deletar atleta por ID (admin)
router.delete('/:id', authMiddleware, deleteAtleta as unknown as RequestHandler);

export default router;
