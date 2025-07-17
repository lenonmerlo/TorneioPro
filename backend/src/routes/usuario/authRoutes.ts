// 📁 backend/src/routes/usuario/authRoutes.ts
import { RequestHandler, Router } from 'express';
import { createLogin, createRegister } from '../../controllers/authController';

const router = Router();

router.post('/login', createLogin as unknown as RequestHandler);
router.post('/register', createRegister as unknown as RequestHandler);

export default router;
