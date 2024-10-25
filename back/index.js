const express = require("express")
const { engine } = require("express-handlebars");

// Habilita a leitura de propriedades do arquivo .env
require("dotenv").config();

// Routes
const cursoRoutes = require("./routes/curso.js");
const disciplinaRoutes = require("./routes/disciplina.js");
const turmaRoutes = require("./routes/turma.js");
const professorRoutes = require("./routes/professor.js");
const alunoRoutes = require("./routes/aluno.js");
const usuarioRoutes = require("./routes/usuario.js");
const db = require("./db/connection.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());


app.use(express.static("./"));

// Handlebars config
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Inserção das tabelas no banco
db.sync({ alter: true })
    .then(() => {
        console.log("Tabelas criadas");
    })
    .catch((error) => {
        console.error("Erro ao sincronizar o banco de dados:", error);
    });

app.use(cursoRoutes);
app.use(disciplinaRoutes);
app.use(turmaRoutes);
app.use(alunoRoutes);
app.use(professorRoutes);
app.use(usuarioRoutes);

app.get('/', (req, res) => {
    return res.render('home');
});


app.listen(process.env.PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});