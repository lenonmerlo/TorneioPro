# 🏐 TorneioPro

**Seu gerenciador de torneios de Vôlei de Praia** – Um sistema completo para organização de torneios, com sorteio de equipes, controle de partidas, rankings e muito mais.

---

## 🧱 Estrutura do Projeto

```
torneiopro/
├── backend/   # API REST com Node.js, Express, Prisma e PostgreSQL
├── frontend/  # Interface web com React + Vite + TailwindCSS
```

---

## 🔧 Como rodar localmente

### 1. Clone o projeto

```bash
git clone https://github.com/seu-usuario/torneiopro.git
cd torneiopro
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
DATABASE_URL=postgresql://usuario:senha@localhost:5432/torneiopro
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
- Painel administrativo (treinador)

---

## 👨‍💻 Desenvolvedor

**Lenon Merlo**  
Full Stack Developer — FIAP | UVV