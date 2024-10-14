const { DataTypes } = require("sequelize");
const db = require("../db/connection.js")
const Turma = require("./Turma.js");

const Curso = db.define('curso', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duracao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipoPeriodo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Curso.hasMany(Turma);
Turma.belongsTo(Curso, {
    foreignKey: "cursoId"
})

Curso.sync({ alter: true });

module.exports = Curso;