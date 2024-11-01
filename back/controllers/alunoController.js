const Aluno = require("../models/Aluno.js");
const hashPassword = require("../utils/hashPassword.js");

// Criar um novo aluno (Create)
const createAluno = async (req, res) => {
    try {
        const { ra, nome, cpf, email, senha, dataNascimento, turmaId } = req.body;

        // Validação simples
        if (!ra || !nome || !cpf || !email || !senha || !dataNascimento || !turmaId) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios." });
        }

        // Criação do aluno
        const novoAluno = await Aluno.create({
            ra,
            nome,
            cpf,
            email,
            senha: hashPassword(senha),
            dataNascimento,
            turmaId
        });

        return res.status(201).json(novoAluno); // Retorna o novo aluno criado
    } catch (error) {
        return res.status(500).json({ message: "Erro ao criar aluno", error });
    }
};

// Listar todos os alunos (Read)
const getAllAlunos = async (req, res) => {
    try {
        const alunos = await Aluno.findAll();
        return res.json(alunos); // Retorna todos os alunos
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar alunos", error });
    }
};

// Buscar aluno por ID (Read)
const getAlunoById = async (req, res) => {
    try {
        const { id } = req.params; // Pegando o ID dos parâmetros da URL
        const aluno = await Aluno.findByPk(id); // Busca aluno pelo ID (Primary Key)

        if (!aluno) {
            return res.status(404).json({ message: "Aluno não encontrado" });
        }

        return res.json(aluno); // Retorna o aluno encontrado
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar aluno", error });
    }
};

// Editar um aluno existente (Update)
const editAluno = async (req, res) => {
    try {
        const { id } = req.params;
        const { ra, nome, cpf, email, senha, dataNascimento, turmaId } = req.body;

        // Busca o aluno pelo ID
        const aluno = await Aluno.findByPk(id);

        if (!aluno) {
            return res.status(404).json({ message: "Aluno não encontrado" });
        }

        // Atualiza os dados do aluno
        aluno.ra = ra || aluno.ra;
        aluno.nome = nome || aluno.nome;
        aluno.cpf = cpf || aluno.cpf;
        aluno.email = email || aluno.email;
        aluno.senha = senha || aluno.senha;
        aluno.dataNascimento = dataNascimento || aluno.dataNascimento;
        aluno.turmaId = turmaId || aluno.turmaId;

        // Salva as alterações no banco de dados
        await aluno.save();

        return res.json(aluno); // Retorna o aluno atualizado
    } catch (error) {
        return res.status(500).json({ message: "Erro ao editar aluno", error });
    }
};

// Deletar um aluno (Delete)
const deleteAluno = async (req, res) => {
    try {
        const { id } = req.params;

        // Busca o aluno pelo ID
        const aluno = await Aluno.findByPk(id);

        if (!aluno) {
            return res.status(404).json({ message: "Aluno não encontrado" });
        }

        // Deleta o aluno
        await aluno.destroy();

        return res.json({ message: "Aluno deletado com sucesso" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao deletar aluno", error });
    }
};

module.exports = {
    createAluno,
    getAllAlunos,
    getAlunoById,
    editAluno,
    deleteAluno
};
