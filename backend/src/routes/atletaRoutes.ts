import { Router } from 'express';
import {
  criarAtleta,
  listarAtletas,
  atualizarAtleta,
  deletarAtleta
} from '@/controllers/atletaController';

import { authMiddleware } from '@/middlewares/authMiddleware';


const router = Router();


router.get('/', authMiddleware, listarAtletas);


router.post('/', authMiddleware, criarAtleta);


router.put('/:id', authMiddleware, atualizarAtleta);


router.delete('/:id', authMiddleware, deletarAtleta);

export default router;
