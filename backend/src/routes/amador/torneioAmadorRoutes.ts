// 📁 backend/src/routes/amador/torneioAmadorRoutes.ts
// POST /sorteio/amador/:torneioId

import { RequestHandler, Router } from 'express';
import { dispararSorteioAmador, getResultadoSorteioAmador } from '../../controllers/amador/sorteioController';

const router = Router();

router.post('/:torneioId', dispararSorteioAmador as unknown as RequestHandler);
router.get('/:torneioId', getResultadoSorteioAmador as unknown as RequestHandler);

export default router;
