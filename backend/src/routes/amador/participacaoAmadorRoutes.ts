// 📁 backend/src/routes/amador/participacaoAmadorRoutes.ts
import { RequestHandler, Router } from 'express';
import {
  getInscritosAmador,
  createParticipacaoAmador,
  updateInscricaoAmador,
  deleteInscricaoAmador,
  getTodosInscritosAmador,
} from '../../controllers/amador/participacaoAmadorController';

const router = Router();

router.get('/inscritos', getTodosInscritosAmador as unknown as RequestHandler)

// GET /torneio-amador/inscritos/:torneioId
router.get('/inscritos/:torneioId', getInscritosAmador as unknown as RequestHandler);

// POST /torneio-amador/inscricao
router.post('/inscricao', createParticipacaoAmador as unknown as RequestHandler);

// PUT /torneio-amador/inscricao/:id
router.put('/inscricao/:id', updateInscricaoAmador as unknown as RequestHandler);

// DELETE /torneio-amador/inscricao/:id
router.delete('/inscricao/:id', deleteInscricaoAmador as unknown as RequestHandler);

export default router;
