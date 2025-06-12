import express from 'express';
import {
  listarTreinadores,
  buscarTreinadorPorId,
  criarTreinador,
  atualizarTreinador,
  deletarTreinador
} from '@/controllers/usuario/treinadorController';

const router = express.Router(); // <-- aqui é o ponto-chave!

router.get('/', listarTreinadores);
router.get('/:id', buscarTreinadorPorId);
router.post('/', criarTreinador);
router.put('/:id', atualizarTreinador);
router.delete('/:id', deletarTreinador);

export default router;
