# 🛒 Ecommerce-Typescript

Projeto backend de um sistema de e-commerce, desenvolvido com **Node.js**, **TypeScript** e arquitetura em camadas. O projeto utiliza **Firebase** para autenticação e armazenamento de dados.

## 📁 Estrutura do Projeto

```
src/
├── @types/                 # Tipagens personalizadas
├── controllers/            # Lógica dos endpoints
├── errors/                 # Classes de erro customizadas
├── middlewares/            # Middlewares para autenticação e tratamento de erros
├── models/                 # Modelos de dados (Usuário, Empresa, etc.)
├── repositories/           # Comunicação com banco de dados (camada de persistência)
├── routes/                 # Definição das rotas da API
├── services/               # Lógica de negócio
└── index.ts                # Arquivo principal da aplicação
```

## 🚀 Tecnologias Utilizadas

- Node.js  
- TypeScript  
- Express  
- JWT (para autenticação)  
- Dotenv  
- Firebase (Autenticação e/ou Banco de Dados)  
- ESLint & Prettier (padronização de código)

## 🔐 Funcionalidades (em desenvolvimento)

- [x] Cadastro e login de usuários  
- [x] Autenticação com JWT  
- [x] Cadastro e gerenciamento de empresas  
- [ ] Integração com banco de dados (Firebase)  
- [ ] CRUD completo de produtos  
- [ ] Sistema de carrinho de compras  
- [ ] Finalização de pedidos  

## ⚙️ Configuração do Firebase

Para utilizar o projeto, você precisará configurar um projeto no Firebase:

1. Acesse [https://console.firebase.google.com](https://console.firebase.google.com) e crie um novo projeto.
2. Habilite os serviços necessários (ex: Authentication e Firestore Database).
3. No menu do Firebase, vá em **Configurações do Projeto > Suas credenciais Web**.
4. Copie as configurações e adicione ao seu `.env`.

Exemplo:

```env
PORT=3000
JWT_SECRET=sua_chave_secreta
FIREBASE_API_KEY=sua_api_key
FIREBASE_AUTH_DOMAIN=seu_auth_domain
FIREBASE_PROJECT_ID=seu_project_id
FIREBASE_STORAGE_BUCKET=seu_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
FIREBASE_APP_ID=seu_app_id
```

## 🛠️ Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/Kauapietro031nl/Ecommerce-Typescript.git
cd Ecommerce-Typescript
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` e adicione as variáveis de ambiente (como mostrado acima).

4. Rode a aplicação:

```bash
npm run dev
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Projeto em contrução,Feito com 💙 por [@Kauapietro031nl](https://github.com/Kauapietro031nl)

