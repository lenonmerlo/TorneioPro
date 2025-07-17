import { Router, RequestHandler } from 'express';
import { createLogin, createRegister } from '../controllers/authController';

const router = Router();

router.post('/login', createLogin as unknown as RequestHandler);
router.post('/register', createRegister as unknown as RequestHandler);

export default router;
