import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send(`
    <h2 style="font-family: sans-serif; color: #1e3a8a;">🚀 EVPC Torneio API</h2>
    <p>Acesse a documentação da API aqui: <a href="/api-docs">/api-docs</a></p>
  `);
});

export default router;
