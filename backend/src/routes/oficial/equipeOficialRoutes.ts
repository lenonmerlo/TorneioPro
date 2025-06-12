import { Router } from 'express';
import {
  criarEquipeOficial,
  listarEquipesOficiais,
  deletarEquipeOficial
} from '@/controllers/oficial/equipeOficialController';

const router = Router();

router.get('/', listarEquipesOficiais); 
router.post('/', criarEquipeOficial);
router.delete('/:id', deletarEquipeOficial);

export default router;
