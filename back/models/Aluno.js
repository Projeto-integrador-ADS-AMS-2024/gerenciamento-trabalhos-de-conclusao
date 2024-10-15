const { DataTypes } = require("sequelize");
const db = require("../db/connection.js");
const Turma = require("./Turma.js");

const Aluno = db.define('alunos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ra: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dataNascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    turmaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

Aluno.sync({ alter: true });

module.exports = Aluno;