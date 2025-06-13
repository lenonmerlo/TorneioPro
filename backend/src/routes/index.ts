// backend/src/routes/index.ts
import { Router } from 'express';

import authRoutes from './usuario/authRoutes';
import treinadorRoutes from './usuario/treinadorRoutes';
import torneioRoutes from './usuario/torneioRoutes';

import equipeAmadorRoutes from './amador/equipeAmadorRoutes';
import participacaoAmadorRoutes from './amador/participacaoAmadorRoutes';
import sorteioRoutes from './amador/sorteioRoutes';

import equipeOficialRoutes from './oficial/equipeOficialRoutes';
import partidaRoutes from './oficial/partidaRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/treinadores', treinadorRoutes);
router.use('/torneios', torneioRoutes);

// AMADOR
router.use('/equipes-amador', equipeAmadorRoutes);
router.use('/participacoes-amador', participacaoAmadorRoutes);
router.use('/sorteio-amador', sorteioRoutes);

// OFICIAL
router.use('/equipes-oficial', equipeOficialRoutes);
router.use('/partidas', partidaRoutes);

export default router;
