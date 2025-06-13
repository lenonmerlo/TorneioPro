import { RequestHandler, Router } from 'express';
import {
  criarEquipeOficial,
  listarEquipesOficiais,
  deletarEquipeOficial
} from '../../controllers/oficial/equipeOficialController';

const router = Router();

router.get('/', listarEquipesOficiais as unknown as RequestHandler); 
router.post('/', criarEquipeOficial as unknown as RequestHandler);
router.delete('/:id', deletarEquipeOficial as unknown as RequestHandler);

export default router;
