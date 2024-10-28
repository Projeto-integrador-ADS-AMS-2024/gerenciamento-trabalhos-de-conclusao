const { Sequelize } = require("sequelize");

// Habilita a leitura de propriedades do arquivo .env
require("dotenv").config();

// Criação do banco
const db = new Sequelize(
    process.env.DBNAME, 
    process.env.DBUSER, 
    process.env.DBPASSWORD, 
    {
        host: "localhost",
        dialect: 'mysql'
    }
)

module.exports = db;