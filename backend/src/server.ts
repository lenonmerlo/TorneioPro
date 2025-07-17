/// <reference path="./types/index.d.ts" />

import express, { Application } from 'express';
import cors from 'cors';
import routes from './routes/index';



const app: Application = express();
const PORT = process.env.PORT || 3333;

// Middlewares
app.use(cors());
app.use(express.json()); // ✅ substitui body-parser


// Rotas principais da API
app.use('/api', routes);

// Start do servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em:     http://localhost:${PORT}`);
});
