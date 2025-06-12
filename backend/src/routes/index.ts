import { Router } from 'express';
import equipeRoutes from './amador/equipeRoutes';
import atletaRoutes from './amador/atletaRoutes';
import authRoutes from './usuario/authRoutes';
import treinadorRoutes from './usuario/treinadorRoutes';
import torneioRoutes from './torneioRoutes';
import sorteioRoutes from './amador/sorteioRoutes';
import chavesAmadorRoutes from './amador/chavesAmadorRoutes';
import equipeOficialRoutes from './oficial/equipeOficialRoutes';
import partidaRoutes from './oficial/partidaRoutes';
import participacaoAmadorRoutes from './amador/participacaoAmadorRoutes';


const router = Router();

router.use('/auth', authRoutes);
router.use('/equipes', equipeRoutes);
router.use('/atletas', atletaRoutes);
router.use('/treinadores', treinadorRoutes);
router.use('/torneios', torneioRoutes);
router.use('/sorteios', sorteioRoutes);
router.use('/sorteio', chavesAmadorRoutes);
router.use('/equipe-oficial', equipeOficialRoutes);
router.use('/partidas', partidaRoutes);
router.use('/torneio-amador', participacaoAmadorRoutes);


export default router;
