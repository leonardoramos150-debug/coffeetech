// routes/usuarioRoutes.js
const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');

// LISTAR USUÁRIOS
router.get('/usuarios', UsuarioController.listar);

// CRIAR USUÁRIO
router.post('/usuarios', UsuarioController.criar);

// ✅ ATUALIZAR USUÁRIO (PUT)
router.put('/usuarios/:id', UsuarioController.atualizar);

// DELETAR USUÁRIO
router.delete('/usuarios/:id', UsuarioController.deletar);

module.exports = router;
