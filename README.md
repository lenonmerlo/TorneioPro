# 🏐 Torneio EVPC

Sistema completo para gerenciamento de torneios de vôlei — desenvolvido com foco em interatividade, sorteios automáticos, controle de equipes e resultados.

---

## 🧱 Estrutura do Projeto

```
torneio-evpc/
├── backend/   # API REST com Node.js, Express, Prisma e PostgreSQL
├── frontend/  # Interface web com React + Vite + TailwindCSS
```

---

## 🔧 Como rodar localmente

### 1. Clone o projeto

```bash
git clone https://github.com/seu-usuario/torneio-evpc.git
cd torneio-evpc
```

---

## 🚀 Backend

### Entrar na pasta:
```bash
cd backend
```

### Instalar dependências:
```bash
npm install
```

### Configurar `.env`:

```
DATABASE_URL=postgresql://usuario:senha@localhost:5432/evpc_torneio
JWT_SECRET=seu_token_secreto
```

### Executar migrações:
```bash
npx prisma migrate dev
```

### Iniciar servidor:
```bash
npx tsx src/server.ts
```

Documentação Swagger disponível em:  
[http://localhost:3333/api-docs](http://localhost:3333/api-docs)

---

## 🌐 Frontend

### Entrar na pasta:
```bash
cd ../frontend
```

### Instalar dependências:
```bash
npm install
```

### Rodar o projeto:
```bash
npm run dev
```

Aplicação disponível em:  
[http://localhost:5173](http://localhost:5173)

---

## ✨ Funcionalidades

- Cadastro de atletas
- Inscrição de equipes (duplas, trios, quartetos)
- Sorteio automático de chaves
- Registro de partidas e pontuação
- Ranking por torneio
- Exportação para PDF
- Painel administrativo (professor)

---

## 👨‍💻 Desenvolvedor

**Lenon Merlo**  
Full Stack Developer — FIAP | UVV | EVPC