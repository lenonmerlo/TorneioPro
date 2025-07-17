
import { Router, RequestHandler } from 'express';
import { dispararSorteioAmador } from '../controllers/sorteioController';

const router = Router();

router.post('/:torneioId', dispararSorteioAmador as unknown as RequestHandler);

export default router;
