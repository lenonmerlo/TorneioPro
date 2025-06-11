import { Router } from 'express';
import {
  listarInscritosAmador,
  inscreverAtletaNoAmador,
  atualizarInscricaoAmador,
  removerInscricaoAmador,
} from '@/controllers/torneioAmador/participacaoAmadorController';


const router = Router();

// GET /torneio-amador/inscritos
router.get('/inscritos', listarInscritosAmador);

// POST /torneio-amador/inscricao
router.post('/inscricao', inscreverAtletaNoAmador);

// PUT /torneio-amador/inscricao/:id
router.put('/inscricao/:id', atualizarInscricaoAmador);

// DELETE /torneio-amador/inscricao/:id
router.delete('/inscricao/:id', removerInscricaoAmador);

export default router;
