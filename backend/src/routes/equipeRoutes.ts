import { Router, RequestHandler } from 'express';
import {
  listarEquipes,
  getEquipeById,
  criarEquipe,
  atualizarEquipe,
  deletarEquipe
} from '../controllers/equipeController';


const router = Router();

router.get('/torneio/:torneioId', listarEquipes as unknown as RequestHandler);
router.get('/:id', getEquipeById as unknown as RequestHandler);
router.post('/', criarEquipe as unknown as RequestHandler);
router.put('/:id', atualizarEquipe as unknown as RequestHandler);
router.delete('/:id', deletarEquipe as unknown as RequestHandler);

export default router;
