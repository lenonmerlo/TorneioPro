import express from 'express';
import { sortearQuartetos } from '@/controllers/amador/sorteioController';


const router = express.Router();

router.post('/amador', sortearQuartetos);

export default router;
