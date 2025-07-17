
import { Router, RequestHandler } from 'express';
import {
  createAtleta,
  getAllAtletas,
  getAtletaById,
  updateAtleta,
  deleteAtleta,
} from '../controllers/atletaController';

const router = Router();

router.post('/', createAtleta as unknown as RequestHandler);
router.get('/', getAllAtletas as unknown as RequestHandler);
router.get('/:id', getAtletaById as unknown as RequestHandler);
router.put('/:id', updateAtleta as unknown as RequestHandler);
router.delete('/:id', deleteAtleta as unknown as RequestHandler);

export default router;
