import { Router } from 'express';
import {
  criarEquipeOficial,
  listarEquipesOficiais,
  deletarEquipeOficial
} from '@/controllers/equipeOficialController';

const router = Router();

router.post('/oficial/equipe', criarEquipeOficial);
router.get('/oficial/equipes', listarEquipesOficiais);
router.delete('/oficial/equipe/:id', deletarEquipeOficial);

export default router;
