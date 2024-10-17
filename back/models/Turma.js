const { DataTypes } = require("sequelize");
const db = require("../db/connection.js");
const Aluno = require("./Aluno.js");

const Turma = db.define('turmas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    turno: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cursoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    disciplinaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

Turma.hasMany(Aluno);
Aluno.belongsTo(Turma, {
    foreignKey: "turmaId"
})

Turma.sync({ alter: true });

module.exports = Turma;