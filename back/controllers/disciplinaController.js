const Disciplina = require("../models/Disciplina.js");

// Renderizar pagina do curso
const pageDisciplinas = async (req, res) => {
    try {
        return res.render("disciplinas"); // Retorna a pagina
    } catch (error) {
        return res.status(500).json({ message: "Erro ao exibir a página de disciplinas", error });
    }
};

// Criar uma nova disciplina (Create)
const createDisciplina = async (req, res) => {
    try {
        const { nome } = req.body; // Pegando o nome da disciplina do corpo da requisição

        // Validação simples
        if (!nome) {
            return res.status(400).json({ message: "O campo nome é obrigatório." });
        }

        // Criação da disciplina
        const novaDisciplina = await Disciplina.create({ nome });

        return res.status(201).json(novaDisciplina); // Retorna a nova disciplina criada
    } catch (error) {
        return res.status(500).json({ message: "Erro ao criar disciplina", error });
    }
};

// Listar todas as disciplinas (Read)
const getAllDisciplinas = async (req, res) => {
    try {
        const disciplinas = await Disciplina.findAll();
        return res.render("visualizarDisciplinas", {disciplinas}); // Retorna todas as disciplinas
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar disciplinas", error });
    }
};

// Buscar disciplina por ID (Read)
const getDisciplinaById = async (req, res) => {
    try {
        const { id } = req.params; // Pegando o ID dos parâmetros da URL
        const disciplina = await Disciplina.findByPk(id); // Busca disciplina pelo ID (Primary Key)

        if (!disciplina) {
            return res.status(404).json({ message: "Disciplina não encontrada" });
        }

        return res.json(disciplina); // Retorna a disciplina encontrada
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar disciplina", error });
    }
};

// Editar uma disciplina existente (Update)
const editDisciplina = async (req, res) => {
    try {
        const { id } = req.params; // Pegando o ID dos parâmetros da URL
        const { nome } = req.body; // Pegando os novos dados do corpo da requisição

        // Busca a disciplina pelo ID
        const disciplina = await Disciplina.findByPk(id);

        if (!disciplina) {
            return res.status(404).json({ message: "Disciplina não encontrada" });
        }

        // Atualiza os dados da disciplina
        disciplina.nome = nome || disciplina.nome;

        // Salva as alterações no banco de dados
        await disciplina.save();

        return res.json(disciplina); // Retorna a disciplina atualizada
    } catch (error) {
        return res.status(500).json({ message: "Erro ao editar disciplina", error });
    }
};

// Deletar uma disciplina (Delete)
const deleteDisciplina = async (req, res) => {
    try {
        const { id } = req.params; // Pegando o ID dos parâmetros da URL

        // Busca a disciplina pelo ID
        const disciplina = await Disciplina.findByPk(id);

        if (!disciplina) {
            return res.status(404).json({ message: "Disciplina não encontrada" });
        }

        // Deleta a disciplina
        await disciplina.destroy();

        return res.json({ message: "Disciplina deletada com sucesso" }); // Retorna mensagem de sucesso
    } catch (error) {
        return res.status(500).json({ message: "Erro ao deletar disciplina", error });
    }
};

module.exports = {
    pageDisciplinas,
    createDisciplina,
    getAllDisciplinas,
    getDisciplinaById,
    editDisciplina,
    deleteDisciplina
};
