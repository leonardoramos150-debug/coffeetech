const mysql = require('mysql2/promise');
require('dotenv').config();

const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    console.log('🔌 MySQL Conectado com Sucesso!');
    return connection;

  } catch (error) {
    console.error('Erro fatal ao conectar no banco:', error.message);
    // Encerra o app se não conectar, pois sem banco nada funciona
    process.exit(1); 
  }
};

module.exports = connectDB;