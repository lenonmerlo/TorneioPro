# 🏐 TorneioPro - Backend

Este é o backend oficial do sistema **TorneioPro – Seu gerenciador de torneios de Vôlei de Praia**, desenvolvido com **Node.js + Express + Prisma ORM** e banco de dados **PostgreSQL**.

---

## 🚀 Funcionalidades

- Cadastro de usuários (atletas e treinadores)
- Criação e administração de torneios
- Inscrição de equipes (duplas, trios e quartetos)
- Sorteio de chaves com regras específicas
- Registro de partidas e geração de ranking
- Autenticação via JWT
- Integração futura com Swagger para documentação da API

---

## 🧱 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)

---

## 📁 Estrutura de Pastas

```
src/
├── controllers/       # Lógica de negócio e CRUDs
├── routes/            # Rotas organizadas por domínio
├── middlewares/       # Autenticação JWT
├── utils/             # Lógicas de sorteio e JWT
├── lib/               # Prisma Client
├── server.ts          # Inicialização do servidor
```

---

## 🔧 Como rodar localmente

### 1. Clone o projeto
```bash
git clone https://github.com/seuusuario/torneiopro.git
cd torneiopro/backend
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o arquivo .env
Crie um arquivo `.env` com o seguinte conteúdo:
```
DATABASE_URL=postgresql://usuario:senha@localhost:5432/torneiopro
JWT_SECRET=sua_chave_secreta
```

### 4. Execute as migrations
```bash
npx prisma migrate dev
```

### 5. Inicie o servidor
```bash
npx tsx src/server.ts
```

A API estará disponível em: [http://localhost:3333/api](http://localhost:3333/api)

---

## 📮 Principais Endpoints

| Método | Rota                         | Descrição                                |
|--------|------------------------------|-------------------------------------------|
| POST   | `/api/auth/login`           | Login e geração de token JWT             |
| POST   | `/api/auth/register`        | Cadastro de usuário                      |
| GET    | `/api/atletas`              | Listagem de atletas                      |
| POST   | `/api/atletas`              | Cadastro de novo atleta                  |
| GET    | `/api/equipes`              | Listagem de equipes                      |
| POST   | `/api/equipes`              | Cadastro de equipe (amador ou oficial)   |
| POST   | `/api/sorteios/amador`      | Sorteio de quarteto misto equilibrado    |
| GET    | `/api/partidas/:torneioId`  | Listagem de partidas do torneio          |
| POST   | `/api/partidas`             | Registro de placar da partida            |
| GET    | `/api/partidas/ranking/:torneioId` | Ranking do torneio                     |

---

## 👨‍💻 Desenvolvido por

**Lenon Merlo** – Full Stack Developer  
FIAP | UVV
