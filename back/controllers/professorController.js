const Professor = require("../models/Professor.js");

// Criar um novo professor (Create)
const createProfessor = async (req, res) => {
    try {
        const { matricula, nome, papel, cpf, email, senha, dataNascimento } = req.body;

        // Validação simples
        if (!matricula || !nome || !papel || !cpf || !email || !senha || !dataNascimento) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios." });
        }

        // Criação do professor
        const novoProfessor = await Professor.create({
            matricula,
            nome,
            papel,
            cpf,
            email,
            senha,
            dataNascimento
        });

        return res.status(201).json(novoProfessor); // Retorna o novo professor criado
    } catch (error) {
        return res.status(500).json({ message: "Erro ao criar professor", error });
    }
};

// Listar todos os professores (Read)
const getAllProfessores = async (req, res) => {
    try {
        const professores = await Professor.findAll();
        return res.json(professores); // Retorna todos os professores
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar professores", error });
    }
};

// Buscar professor por ID (Read)
const getProfessorById = async (req, res) => {
    try {
        const { id } = req.params; // Pegando o ID dos parâmetros da URL
        const professor = await Professor.findByPk(id); // Busca professor pelo ID (Primary Key)

        if (!professor) {
            return res.status(404).json({ message: "Professor não encontrado" });
        }

        return res.json(professor); // Retorna o professor encontrado
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar professor", error });
    }
};

// Editar um professor existente (Update)
const editProfessor = async (req, res) => {
    try {
        const { id } = req.params;
        const { matricula, nome, papel, cpf, email, senha, dataNascimento } = req.body;

        // Busca o professor pelo ID
        const professor = await Professor.findByPk(id);

        if (!professor) {
            return res.status(404).json({ message: "Professor não encontrado" });
        }

        // Atualiza os dados do professor
        professor.matricula = matricula || professor.matricula;
        professor.nome = nome || professor.nome;
        professor.papel = papel || professor.papel;
        professor.cpf = cpf || professor.cpf;
        professor.email = email || professor.email;
        professor.senha = senha || professor.senha;
        professor.dataNascimento = dataNascimento || professor.dataNascimento;

        // Salva as alterações no banco de dados
        await professor.save();

        return res.json(professor); // Retorna o professor atualizado
    } catch (error) {
        return res.status(500).json({ message: "Erro ao editar professor", error });
    }
};

// Deletar um professor (Delete)
const deleteProfessor = async (req, res) => {
    try {
        const { id } = req.params;

        // Busca o professor pelo ID
        const professor = await Professor.findByPk(id);

        if (!professor) {
            return res.status(404).json({ message: "Professor não encontrado" });
        }

        // Deleta o professor
        await professor.destroy();

        return res.json({ message: "Professor deletado com sucesso" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao deletar professor", error });
    }
};

module.exports = {
    createProfessor,
    getAllProfessores,
    getProfessorById,
    editProfessor,
    deleteProfessor
};
