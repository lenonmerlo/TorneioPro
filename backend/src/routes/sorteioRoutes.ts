import express from 'express';
import { sortearQuartetos } from '@/controllers/sorteioController';

const router = express.Router();

router.post('/amador', sortearQuartetos);

export default router;
