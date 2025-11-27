// controllers/usuarioController.js
const UsuarioModel = require('../models/usuarioModel');

const UsuarioController = {
  // LISTAR
  async listar(req, res) {
    try {
      const usuarios = await UsuarioModel.listar();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao listar usuários' });
    }
  },

  // CRIAR
  async criar(req, res) {
    const { nome, email } = req.body;

    if (!nome || !email) {
      return res.status(400).json({ erro: 'Nome e email são obrigatórios' });
    }

    try {
      await UsuarioModel.criar(nome, email);
      res.status(201).json({ mensagem: 'Usuário criado com sucesso' });
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao criar usuário' });
    }
  },

  // ✅ ATUALIZAR (FUNÇÃO QUE VOCÊ PRECISAVA)
  async atualizar(req, res) {
    const { id } = req.params;
    const { nome, email } = req.body;

    if (!nome || !email) {
      return res.status(400).json({ erro: 'Nome e email são obrigatórios' });
    }

    try {
      await UsuarioModel.atualizar(id, nome, email);
      res.json({ mensagem: 'Usuário atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao atualizar usuário' });
    }
  },

  // DELETAR
  async deletar(req, res) {
    const { id } = req.params;

    try {
      await UsuarioModel.deletar(id);
      res.json({ mensagem: 'Usuário deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao deletar usuário' });
    }
  }
};

module.exports = UsuarioController;
