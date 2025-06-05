import { Router } from 'express';
import equipeRoutes from './equipeRoutes';
import atletaRoutes from './atletaRoutes';
import authRoutes from './authRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/equipes', equipeRoutes);
router.use('/atletas', atletaRoutes);

export default router;
