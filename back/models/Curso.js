const { DataTypes } = require("sequelize");
const db = require("../db/connection.js")
const Turma = require("./Turma.js");
const Professor = require("./Professor.js");

const Curso = db.define('cursos', {
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
    turno: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coordenadorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

// Relacionamento 1-1 com o coordenador
Curso.hasOne(Professor, {
    foreignKey: "coordenadorId"
});
Professor.belongsTo(Curso);

// Relacionamento 1-N com a turma
Curso.hasMany(Turma);
Turma.belongsTo(Curso, {
    foreignKey: "cursoId"
})

module.exports = Curso;