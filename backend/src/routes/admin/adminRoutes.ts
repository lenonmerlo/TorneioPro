import { Router, RequestHandler } from 'express';
import { getDashboardResumo } from '../../controllers/admin/adminController';

const router = Router();

router.get('/dashboard', getDashboardResumo as RequestHandler);

export default router;
