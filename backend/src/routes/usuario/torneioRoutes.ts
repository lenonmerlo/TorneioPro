import express from 'express';
import {
  getTorneios,
  createTorneio,
  updateTorneio,
  deleteTorneio,
} from '../../controllers/usuario/torneioController';

const router = express.Router();

router.get('/', getTorneios);
router.post('/', createTorneio);
router.put('/:id', updateTorneio);
router.delete('/:id', deleteTorneio);

export default router;
