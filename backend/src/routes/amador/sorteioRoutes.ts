// 📁 backend/src/routes/amador/sorteioRoutes.ts
// POST /sorteio/amador/:torneioId

import { RequestHandler, Router } from 'express';
import { dispararSorteioAmador } from '../../controllers/amador/sorteioController';

const router = Router();

// Endpoint para o treinador disparar o sorteio do Torneio Amador
// Exemplo: POST http://localhost:3333/api/sorteio/amador/1
router.post('/sorteio/amador/:torneioId', dispararSorteioAmador as unknown as RequestHandler);

export default router;
