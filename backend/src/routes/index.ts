
import { Router } from 'express';
import adminRoutes from './adminRoutes';
import authRoutes from './authRoutes';
import atletaRoutes from './atletaRoutes';
import treinadorRoutes from './treinadorRoutes';
import torneioRoutes from './torneioRoutes';
import equipeRoutes from './equipeRoutes';
import participacaoRoutes from './participacaoRoutes';
import partidaRoutes from './partidaRoutes';
import sorteioRoutes from './sorteioRoutes';

const router = Router();

router.use('/admin', adminRoutes);
router.use('/auth', authRoutes);
router.use('/atletas', atletaRoutes);
router.use('/treinadores', treinadorRoutes);
router.use('/torneios', torneioRoutes);
router.use('/equipes', equipeRoutes);
router.use('/participacoes', participacaoRoutes);
router.use('/partidas', partidaRoutes);
router.use('/sorteio', sorteioRoutes);

export default router;
