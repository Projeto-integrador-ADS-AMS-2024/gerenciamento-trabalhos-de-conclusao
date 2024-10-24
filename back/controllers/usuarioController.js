const pageUsuarios = async (req, res) => {
    try {
        return res.render("visualizarUsuarios"); // Retorna todos os alunos
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar alunos", error });
    }
}


// Renderizar pagina de cadastro de curso
const pageUsuariosCadastro = async (req, res) => {
    try {
        return res.render("cadastrarUsuarios"); // Retorna a pagina
    } catch (error) {
        return res.status(500).json({ message: "Erro ao exibir a página de cadastrar usuários", error });
    }
};



// Renderizar pagina de cadastro de curso
const pageUsuariosImportar = async (req, res) => {
    try {
        return res.render("importarUsuarios"); // Retorna a pagina
    } catch (error) {
        return res.status(500).json({ message: "Erro ao exibir a página de importar usuários", error });
    }
};


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
    pageUsuarios,
    pageUsuariosCadastro,
    pageUsuariosImportar,
    getAllUsuarios,
};
