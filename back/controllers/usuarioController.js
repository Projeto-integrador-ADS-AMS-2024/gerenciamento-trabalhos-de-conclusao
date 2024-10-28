const Aluno = require("../models/Aluno");
const Professor = require("../models/Professor");

const getAllUsuarios = async (req, res) => {
    try {
        const alunos = await Aluno.findAll();
        const professores = await Professor.findAll();

        return res.status(200).json(alunos, professores); // Retorna todos os usuarios
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar usuarios", error });
    }
}

module.exports = {
    getAllUsuarios,
};
