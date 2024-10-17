const Professor = require("../models/Professor.js");

const getAllUsuarios = async (req, res) => {
    try {
        // const alunos = await Aluno.findAll();
        // const professores = await Professor.findAll();

        // const usuarios = {alunos, professores} ;
        return res.render("visualizarUsuarios"); // Retorna todos os alunos
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar alunos", error });
    }
}

module.exports = {
    getAllUsuarios
};
