const Turma = require("../models/Turma.js");

// Criar uma nova turma (Create)
const createTurma = async (req, res) => {
    try {
        const { nome, cursoId, disciplinaId } = req.body; // Pegando os dados do corpo da requisição

        // Validação simples
        if (!nome || !cursoId || !disciplinaId) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios." });
        }

        // Criação da turma
        const novaTurma = await Turma.create({
            nome,
            cursoId,
            disciplinaId
        });

        return res.status(201).json(novaTurma); // Retorna a nova turma criada
    } catch (error) {
        return res.status(500).json({ message: "Erro ao criar turma", error });
    }
};

// Listar todas as turmas (Read)
const getAllTurmas = async (req, res) => {
    try {
        const turmas = await Turma.findAll();
        return res.json(turmas); // Retorna todas as turmas
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar turmas", error });
    }
};

// Buscar turma por ID (Read)
const getTurmaById = async (req, res) => {
    try {
        const { id } = req.params; // Pegando o ID dos parâmetros da URL
        const turma = await Turma.findByPk(id); // Busca turma pelo ID (Primary Key)

        if (!turma) {
            return res.status(404).json({ message: "Turma não encontrada" });
        }

        return res.json(turma); // Retorna a turma encontrada
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar turma", error });
    }
};

// Editar uma turma existente (Update)
const editTurma = async (req, res) => {
    try {
        const { id } = req.params; // Pegando o ID dos parâmetros da URL
        const { nome, cursoId, disciplinaId } = req.body; // Pegando os novos dados do corpo da requisição

        // Busca a turma pelo ID
        const turma = await Turma.findByPk(id);

        if (!turma) {
            return res.status(404).json({ message: "Turma não encontrada" });
        }

        // Atualiza os dados da turma
        turma.nome = nome || turma.nome;
        turma.cursoId = cursoId || turma.cursoId;
        turma.disciplinaId = disciplinaId || turma.disciplinaId;

        // Salva as alterações no banco de dados
        await turma.save();

        return res.json(turma); // Retorna a turma atualizada
    } catch (error) {
        return res.status(500).json({ message: "Erro ao editar turma", error });
    }
};

// Deletar uma turma (Delete)
const deleteTurma = async (req, res) => {
    try {
        const { id } = req.params; // Pegando o ID dos parâmetros da URL

        // Busca a turma pelo ID
        const turma = await Turma.findByPk(id);

        if (!turma) {
            return res.status(404).json({ message: "Turma não encontrada" });
        }

        // Deleta a turma
        await turma.destroy();

        return res.json({ message: "Turma deletada com sucesso" }); // Retorna mensagem de sucesso
    } catch (error) {
        return res.status(500).json({ message: "Erro ao deletar turma", error });
    }
};

module.exports = {
    createTurma,
    getAllTurmas,
    getTurmaById,
    editTurma,
    deleteTurma
};
