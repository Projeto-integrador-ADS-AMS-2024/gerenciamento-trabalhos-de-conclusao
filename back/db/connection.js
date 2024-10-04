import { Sequelize } from 'sequelize'

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

export default db;