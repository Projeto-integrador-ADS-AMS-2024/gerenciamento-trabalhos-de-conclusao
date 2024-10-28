const { DataTypes } = require("sequelize");
const db = require("../db/connection.js");
const Turma = require("./Turma.js");

const Disciplina = db.define('disciplinas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Disciplina.hasMany(Turma);
Turma.belongsTo(Disciplina, {
    foreignKey: "disciplinaId"
})

module.exports = Disciplina;