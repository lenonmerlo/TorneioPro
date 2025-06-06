import { Router } from 'express';
import equipeRoutes from './equipeRoutes';
import atletaRoutes from './atletaRoutes';
import authRoutes from './authRoutes';
import treinadorRoutes from './treinadorRoutes';
import torneioRoutes from './torneioRoutes';
import sorteioRoutes from './sorteioRoutes';
import chavesAmadorRoutes from './sorteio/chavesAmadorRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/equipes', equipeRoutes);
router.use('/atletas', atletaRoutes);
router.use('/treinadores', treinadorRoutes);
router.use('/torneios', torneioRoutes);
router.use('/sorteios', sorteioRoutes);
router.use('/sorteio', chavesAmadorRoutes);

export default router;
