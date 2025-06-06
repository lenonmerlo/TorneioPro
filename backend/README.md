# 🏐 EVPC Torneio - Backend

Este é o backend oficial do sistema de gerenciamento de torneios de vôlei da EVPC, desenvolvido em **Node.js + Express + Prisma ORM** com banco de dados **PostgreSQL**.

## 🚀 Funcionalidades

- Cadastro de atletas e treinadores
- Criação e administração de torneios (Amador e Oficial)
- Inscrição de equipes (duplas, trios e quartetos)
- Sorteio de chaves com regras específicas por tipo de torneio
- Registro de partidas e geração de ranking
- Autenticação via JWT
- Documentação da API via Swagger

---

## 🧱 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)

---

## 📁 Estrutura de Pastas

\`\`\`
src/
├── controllers/       # Lógica de negócio e CRUDs
├── routes/            # Rotas organizadas por entidade
├── middlewares/       # Autenticação JWT
├── utils/             # Lógicas de sorteio e JWT
├── lib/               # Prisma Client
├── swagger/           # Documentação da API
├── server.ts          # Inicialização do servidor
\`\`\`

---

## 🔧 Como rodar localmente

### 1. Clone o projeto
\`\`\`bash
git clone https://github.com/seuusuario/evpc-torneio.git
cd evpc-torneio/backend
\`\`\`

### 2. Instale as dependências
\`\`\`bash
npm install
\`\`\`

### 3. Configure o arquivo .env
Crie um `.env` com as seguintes variáveis:
\`\`\`
DATABASE_URL=postgresql://usuario:senha@localhost:5432/evpc_torneio
JWT_SECRET=sua_chave_secreta
\`\`\`

### 4. Execute as migrations
\`\`\`bash
npx prisma migrate dev
\`\`\`

### 5. Inicie o servidor
\`\`\`bash
npx tsx src/server.ts
\`\`\`

A API estará disponível em: [http://localhost:3333/api](http://localhost:3333/api)

Swagger: [http://localhost:3333/api-docs](http://localhost:3333/api-docs)

---

## 📮 Endpoints principais

| Método | Rota                    | Descrição                     |
|--------|-------------------------|-------------------------------|
| POST   | `/auth/login`           | Login e geração de token JWT |
| GET    | `/atletas`              | Listagem de atletas          |
| POST   | `/equipes`              | Criar equipe amadora         |
| POST   | `/equipe-oficial`       | Criar equipe do torneio oficial |
| POST   | `/sorteios/amador`      | Sorteio de quartetos         |
| GET    | `/chaves-amador`        | Ver chaves do sorteio amador |
| POST   | `/partidas`             | Registrar placar             |
| GET    | `/partidas/ranking`     | Ranking por torneio          |

---

## 👨‍💻 Desenvolvido por

Lenon Merlo – Full Stack Developer  
FIAP | UVV | EVPC
