import { Router } from 'express';
import {
  criarEquipe,
  listarEquipes,
  atualizarEquipe,
  deletarEquipe
} from '@/controllers/amador/equipeController';

const router = Router();

router.get('/', listarEquipes);
router.post('/', criarEquipe);
router.put('/:id', atualizarEquipe);   
router.delete('/:id', deletarEquipe);   

export default router;
