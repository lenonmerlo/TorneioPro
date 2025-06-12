import { Router } from 'express';
import { sortearChavesQuartetos } from '@/controllers/amador/chavesAmadorController';

const router = Router();

router.post('/chaves-amador', sortearChavesQuartetos);

export default router;
