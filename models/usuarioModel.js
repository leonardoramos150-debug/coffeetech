// models/usuarioModel.js
const pool = require('../db'); // agora é a pool

const UsuarioModel = {
  async listar() {
    const [rows] = await pool.query('SELECT * FROM usuarios');
    return rows;
  },

  async criar(nome, email) {
    await pool.query(
      'INSERT INTO usuarios (nome, email) VALUES (?, ?)',
      [nome, email]
    );
  },

  async atualizar(id, nome, email) {
    await pool.query(
      'UPDATE usuarios SET nome = ?, email = ? WHERE id = ?',
      [nome, email, id]
    );
  },

  async deletar(id) {
    await pool.query(
      'DELETE FROM usuarios WHERE id = ?',
      [id]
    );
  }
};

module.exports = UsuarioModel;
