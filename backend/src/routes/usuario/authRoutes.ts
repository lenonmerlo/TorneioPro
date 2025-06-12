import { Router } from 'express';
import { login, registrar } from '@/controllers/usuario/authController';

const router = Router();

router.post('/login', login);
router.post('/register', registrar);

export default router;
