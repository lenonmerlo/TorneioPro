import {
    atualizarAtleta,
    criarAtleta,
    deletarAtleta,
    listarAtletas
} from '@/controllers/amador/atletaController';
import { Router } from 'express';

import { authMiddleware } from '@/middlewares/authMiddleware';


const router = Router();


router.get('/', authMiddleware, listarAtletas);


router.post('/', authMiddleware, criarAtleta);


router.put('/:id', authMiddleware, atualizarAtleta);


router.delete('/:id', authMiddleware, deletarAtleta);

export default router;
