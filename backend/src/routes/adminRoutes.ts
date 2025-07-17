import { RequestHandler, Router } from 'express';
import { getDashboardResumo, getTorneios } from '../controllers/adminController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/dashboard', authMiddleware, getDashboardResumo as unknown as RequestHandler);
router.get('/torneios', authMiddleware, getTorneios);

export default router;
