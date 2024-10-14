const { DataTypes } = require("sequelize");
const db = require("../db/connection.js")

const Turma = db.define('turma', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cursoId: {
        type: DataTypes.INTEGER,
    },
    disciplinaId: {
        type: DataTypes.INTEGER
    }
});

Turma.sync({ alter: true });

module.exports = Turma;