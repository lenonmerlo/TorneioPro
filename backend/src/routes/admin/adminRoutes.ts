import { Router, RequestHandler } from 'express';
import { getDashboardResumo, getTorneios } from '../../controllers/admin/adminController';

const router = Router();

router.get('/dashboard', getDashboardResumo as RequestHandler);
router.get('/torneios', getTorneios as RequestHandler);

export default router;
