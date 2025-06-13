import express, { RequestHandler } from 'express';
import {
  getTreinadores,
  getTreinadorById,
  createTreinador,
  updateTreinador,
  deleteTreinador
} from '../../controllers/usuario/treinadorController';

const router = express.Router(); // <-- aqui é o ponto-chave!

router.get('/', getTreinadores);
router.get('/:id', getTreinadorById as unknown as RequestHandler);
router.post('/', createTreinador as unknown as RequestHandler);
router.put('/:id', updateTreinador);
router.delete('/:id', deleteTreinador);

export default router;
