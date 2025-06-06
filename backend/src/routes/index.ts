import { Router } from 'express';
import equipeRoutes from './equipeRoutes';
import atletaRoutes from './atletaRoutes';
import authRoutes from './authRoutes';
import treinadorRoutes from './treinadorRoutes';
import torneioRoutes from './torneioRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/equipes', equipeRoutes);
router.use('/atletas', atletaRoutes);
router.use('/treinadores', treinadorRoutes);
router.use('/torneios', torneioRoutes);

export default router;
