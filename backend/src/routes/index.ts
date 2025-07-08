import { Router } from 'express';

// Rotas de Usuário/Autenticação
import authRoutes from './usuario/authRoutes';
import treinadorRoutes from './usuario/treinadorRoutes';
import torneioRoutes from './usuario/torneioRoutes';

// Rotas do Módulo Amador
import atletaRoutes from './amador/atletaRoutes';
import equipeAmadorRoutes from './amador/equipeAmadorRoutes';
import participacaoAmadorRoutes from './amador/participacaoAmadorRoutes';
import partidaAmadorRoutes from './amador/partidaAmadorRoutes'; // Adicionado
import torneioAmadorRoutes from './amador/torneioAmadorRoutes';

// Rotas do Módulo Oficial
import equipeOficialRoutes from './oficial/equipeOficialRoutes';
import partidaOficialRoutes from './oficial/partidaRoutes'; // Renomeado para clareza
import adminRoutes from './admin/adminRoutes';


const router = Router();

//Rota Admin
router.use('/admin', adminRoutes);

// Rotas de Autenticação
router.use('/auth', authRoutes);

// Rotas de Usuários (Treinadores e Torneios)
router.use('/usuarios/treinadores', treinadorRoutes);
router.use('/usuarios/torneios', torneioRoutes);

// Rotas do Módulo Amador
router.use('/amador/atletas', atletaRoutes);
router.use('/amador/equipes', equipeAmadorRoutes);
router.use('/amador/participacoes', participacaoAmadorRoutes);
router.use('/amador/partidas', partidaAmadorRoutes);
router.use('/torneio-amador', torneioAmadorRoutes);

// Rotas do Módulo Oficial
router.use('/oficial/equipes', equipeOficialRoutes);
router.use('/oficial/partidas', partidaOficialRoutes);

export default router;