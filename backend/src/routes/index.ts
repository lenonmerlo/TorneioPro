import { Router } from 'express';
import equipeRoutes from './equipeRoutes';
import atletaRoutes from './atletaRoutes';

const router = Router();

router.use('/equipes', equipeRoutes);
router.use('/atletas', atletaRoutes);

export default router;
