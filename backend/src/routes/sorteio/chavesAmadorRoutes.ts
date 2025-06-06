import { Router } from 'express';
import { sortearChavesQuartetos } from '@/controllers/sorteio/chavesAmadorController';

const router = Router();

router.post('/chaves-amador', sortearChavesQuartetos);

export default router;
