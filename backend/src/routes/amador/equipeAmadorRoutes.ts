// backend/src/routes/amador/equipeAmadorRoutes.ts
import { RequestHandler, Router } from 'express';
import { getEquipesAmador } from '../../controllers/amador/equipeAmadorController';

const router = Router();

// GET /equipes-amador/:torneioId
router.get('/equipes-amador/:torneioId', getEquipesAmador as unknown as RequestHandler);

export default router;
