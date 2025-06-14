import express from 'express';

// 🔐 Usuários
import authRoutes from './usuario/authRoutes';
import treinadorRoutes from './usuario/treinadorRoutes';
import torneioRoutes from './usuario/torneioRoutes';

// 🏐 Amador
import atletaRoutes from './amador/atletaRoutes';
import equipeAmadorRoutes from './amador/equipeAmadorRoutes';
import participacaoAmadorRoutes from './amador/participacaoAmadorRoutes';
import partidaAmadorRoutes from './amador/partidaAmadorRoutes';
import sorteioRoutes from './amador/sorteioRoutes';

// 🏆 Oficial
import equipeOficialRoutes from './oficial/equipeOficialRoutes';
import partidaOficialRoutes from './oficial/partidaRoutes';

const router = express.Router();

// ===========================
// 🔐 Rotas de Usuário
// ===========================
router.use('/api/usuarios', authRoutes);
router.use('/api/treinadores', treinadorRoutes);
router.use('/api/torneios', torneioRoutes);

// ===========================
// 🏐 Torneio Amador
// ===========================
router.use('/api/amador/atletas', atletaRoutes);
router.use('/api/amador/equipes', equipeAmadorRoutes);
router.use('/api/amador', participacaoAmadorRoutes); // inclui /inscricao e /inscritos
router.use('/api/amador/partidas', partidaAmadorRoutes);
router.use('/api', sorteioRoutes); // rota POST /sorteio/amador/:torneioId

// ===========================
// 🏆 Torneio Oficial
// ===========================
router.use('/api/oficial/equipes', equipeOficialRoutes);
router.use('/api/oficial/partidas', partidaOficialRoutes);

export default router;
