☕ CoffeeTech — Painel Administrativo em Node.js + MySQL (MVC)

Sistema web desenvolvido com Node.js, Express e MySQL, utilizando o padrão de arquitetura MVC (Model-View-Controller).
Possui um Painel Administrativo completo (CRUD) para gerenciamento de usuários.

✅ Projeto ideal para portfólio, trabalho acadêmico ou base para sistemas reais.

🚀 Funcionalidades

✅ Cadastrar usuários

✅ Listar usuários

✅ Atualizar usuários (Editar)

✅ Remover usuários

✅ Integração com MySQL

✅ Arquitetura MVC

✅ Pool de conexões (mysql2)

✅ Painel Admin em HTML + CSS + JS

🛠 Tecnologias Utilizadas

Node.js

Express

MySQL

mysql2

dotenv

HTML5

CSS3

JavaScript (Fetch API)

📁 Estrutura do Projeto
projeto_coffeetech/
│
├── controllers/
│   └── usuarioController.js
│
├── models/
│   └── usuarioModel.js
│
├── routes/
│   └── usuarioRoutes.js
│
├── public/
│   ├── admin.html
│   ├── index.html
│   └── style.css
│
├── .env
├── db.js
├── server.js
├── package.json
└── README.md

🗄️ Configuração do Banco de Dados

Execute no MySQL:

CREATE DATABASE coffeetech;
USE coffeetech;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);

🔐 Configuração do Arquivo .env

Crie um arquivo chamado .env na raiz do projeto e adicione:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=senai
DB_NAME=coffeetech

📦 Instalação do Projeto

No terminal, dentro da pasta do projeto:

npm install

▶️ Como Executar o Projeto
node server.js


Se tudo estiver correto, aparecerá:

🔌 Pool de conexões MySQL criado com sucesso!
✅ Teste de conexão MySQL OK
🚀 Servidor rodando em http://localhost:3000
📡 Painel Admin disponível em http://localhost:3000/admin.html

🌐 Acesso no Navegador

🏠 Site principal

http://localhost:3000


🛠 Painel Administrativo

http://localhost:3000/admin.html

🔁 Rotas da API (REST)
Método	Rota	Descrição
GET	/usuarios	Lista usuários
POST	/usuarios	Cria usuário
PUT	/usuarios/:id	Atualiza usuário
DELETE	/usuarios/:id	Deleta usuário
🧠 Arquitetura MVC

Model: Comunicação com o banco de dados

Controller: Lógica e regras de negócio

Routes: Rotas da aplicação

View: Interface (HTML)

✅ Código organizado
✅ Fácil manutenção
✅ Pronto para escalar

✅ Status do Projeto

✅ Concluído

✅ Totalmente funcional

✅ Estrutura profissional

✅ CRUD completo

✅ Atualização funcionando

✅ Pronto para GitHub

👨‍💻 Autor

Desenvolvido por Leonardo Ramos

⭐ Dica para o GitHub

Depois de subir o projeto, use:

git add .
git commit -m "Projeto CoffeeTech - CRUD com MVC"
git push origin main
