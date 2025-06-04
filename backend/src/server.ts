import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import routes from '@/routes';
import swaggerDocument from '@/swagger/swagger.json';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em:     http://localhost:${PORT}`);
  console.log(`📚 Documentação Swagger:   http://localhost:${PORT}/api-docs`);
});

