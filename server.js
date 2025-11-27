// server.js
const express = require('express');
const pool = require('./db'); // apenas para garantir que a pool seja criada
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();
const PORT = 3000;

// MIDDLEWARES
app.use(express.json());
app.use(express.static('public'));

// ROTAS
app.use(usuarioRoutes);

// INICIALIZAÇÃO DO SERVIDOR
const startServer = async () => {
  try {
    // Testa uma conexão rápida na pool antes de subir o servidor
    const conn = await pool.getConnection();
    conn.release();
    console.log('✅ Teste de conexão MySQL OK');
  } catch (err) {
    console.error('❌ Erro ao conectar no MySQL:', err.message);
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📡 Painel Admin disponível em http://localhost:${PORT}/admin.html`);
  });
};

startServer();
