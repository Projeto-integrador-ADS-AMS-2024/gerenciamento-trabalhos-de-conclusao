const Curso = require("../models/Curso.js");
const Coordenador = require("../models/Professor.js");

// Renderizar pagina do curso
const pageCursos = async (req, res) => {
    try {
        return res.render("cursos"); // Retorna a pagina
    } catch (error) {
        return res.status(500).json({ message: "Erro ao exibir a página de cursos", error });
    }
};


// Renderizar pagina de cadastro de curso
const pageCursosCadastro = async (req, res) => {
    try {
        const coordenadores = await Coordenador.findAll({
            where: {
                papel: "Coordenador",
            }
        })

        return res.render("cadastrarCursos", {coordenadores}); // Retorna a pagina
    } catch (error) {
        return res.status(500).json({ message: "Erro ao exibir a página de cadastrar cursos", error });
    }
};


// Criar um novo curso (Create)
const createCurso = async (req, res) => {
    try {
        const { nome, duracao, turno, coordenador } = req.body; // Pegando os dados do corpo da requisição
        
        console.log(nome, duracao, turno, coordenador);

        // Validação simples
        if (!nome || !duracao || !turno || !coordenador) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios.", });
        }

        // Criação do curso
        const novoCurso = await Curso.create({
            nome,
            duracao,
            turno, 
            coordenador
        });

        return res.status(201).json(novoCurso); // Retorna o novo curso criado
    } catch (error) {
        return res.status(500).json({ message: "Erro ao criar curso", error });
    }
};

// Listar todos os cursos (Read)
const getAllCursos = async (req, res) => {
    try {
        const cursos = await Curso.findAll();
        
        return res.render("visualizarCursos", {cursos});
        // return res.json(cursos); // Retorna todos os cursos
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar cursos", error });
    }
};

// Buscar curso por ID (Read)
const getCursoById = async (req, res) => {
    try {
        const { id } = req.params; // Pegando o ID dos parâmetros da URL
        const curso = await Curso.findByPk(id); // Busca curso pelo ID (Primary Key)

        if (!curso) {
            return res.status(404).json({ message: "Curso não encontrado" });
        }

        return res.json(curso); // Retorna o curso encontrado
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar curso", error });
    }
};

// Editar um curso existente (Update)
const editCurso = async (req, res) => {
    try {
        const { id } = req.params; // Pegando o ID dos parâmetros da URL
        const { nome, duracao, tipoPeriodo } = req.body; // Pegando os novos dados do corpo da requisição

        // Busca o curso pelo ID
        const curso = await Curso.findByPk(id);

        if (!curso) {
            return res.status(404).json({ message: "Curso não encontrado" });
        }

        // Atualiza os dados do curso
        curso.nome = nome || curso.nome;
        curso.duracao = duracao || curso.duracao;
        curso.tipoPeriodo = tipoPeriodo || curso.tipoPeriodo;

        // Salva as alterações no banco de dados
        await curso.save();

        return res.json(curso); // Retorna o curso atualizado
    } catch (error) {
        return res.status(500).json({ message: "Erro ao editar curso", error });
    }
};

// Deletar um curso (Delete)
const deleteCurso = async (req, res) => {
    try {
        const { id } = req.params; // Pegando o ID dos parâmetros da URL

        // Busca o curso pelo ID
        const curso = await Curso.findByPk(id);

        if (!curso) {
            return res.status(404).json({ message: "Curso não encontrado" });
        }

        // Deleta o curso
        await curso.destroy();

        return res.json({ message: "Curso deletado com sucesso" }); // Retorna mensagem de sucesso
    } catch (error) {
        return res.status(500).json({ message: "Erro ao deletar curso", error });
    }
};

module.exports = {
    pageCursos,
    pageCursosCadastro,
    createCurso,
    getAllCursos,
    getCursoById,
    editCurso,
    deleteCurso
};
