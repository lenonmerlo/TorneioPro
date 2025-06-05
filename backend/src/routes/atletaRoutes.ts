import { Router } from 'express';
import {
  criarAtleta,
  listarAtletas,
  atualizarAtleta,
  deletarAtleta
} from '@/controllers/atletaController';

const router = Router();

router.get('/', listarAtletas);
router.post('/', criarAtleta);
router.put('/:id', atualizarAtleta);    
router.delete('/:id', deletarAtleta);  

export default router;
