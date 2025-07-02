# 🎯 TorneioPro – Frontend

Interface web do sistema **TorneioPro – Seu gerenciador de torneios de Vôlei de Praia**. Desenvolvido com **React + Vite** e estilizado com **TailwindCSS**, o sistema permite inscrições de atletas, sorteio de equipes, visualização de chaves e acesso segmentado por tipo de usuário (atleta ou treinador).

---

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/) (opcional)
- [React Router DOM](https://reactrouter.com/)
- LocalStorage para simulação de persistência

---

## 📁 Estrutura

```
frontend/
├── src/
│   ├── components/        # Componentes reutilizáveis
│   ├── pages/             # Páginas principais (Home, Login, Inscrição, etc.)
│   ├── utils/             # Funções auxiliares (ex: sorteios)
│   ├── assets/            # Imagens e logos
│   └── App.tsx            # Componente raiz
├── public/
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 📦 Instalação

```bash
# Acesse a pasta do frontend
cd frontend

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

---

## 🔐 Fluxo de Acesso

- **Atleta**:
  - Acessa `/login-atleta` e realiza login.
  - Pode se inscrever no Torneio Amador ou Oficial.
  - Pode visualizar as chaves, mas não editá-las.
  - Pode cancelar sua inscrição.

- **Treinador**:
  - Acessa `/login-treinador` e realiza login.
  - Tem acesso total: sorteios, visualização, exclusão e exportação das chaves.
  - Pode cadastrar atletas manualmente.

---

## 📝 Funcionalidades

- [x] Login e Cadastro (Atleta e Treinador)
- [x] Inscrição Amador (Individual)
- [x] Inscrição Oficial (Dupla, Trio, Quarteto)
- [x] Sorteio automático com regras de nivelamento
- [x] Visualização e exportação das chaves (PDF)
- [x] Cancelamento de inscrição pelo atleta
- [x] Interface adaptada para diferentes níveis de acesso

---

## 🏖️ Estilo e Identidade

- Background com imagem de praia e quadra de vôlei
- Paleta de cores azul e neutras (personalizável)
- Ícones visuais nos botões e seções
- Layout responsivo e agradável

---

## 🧠 Observações

- O projeto simula persistência com `localStorage`. A integração com o banco de dados será feita no backend.
- Todas as regras de sorteio foram implementadas em arquivos de utilitários (`/src/utils/`).

---

## 📄 Licença

Projeto desenvolvido para fins educacionais e demonstração comercial. Uso autorizado com fins não comerciais, salvo acordo específico.

---

Desenvolvido com 💙 por Lenon Merlo.