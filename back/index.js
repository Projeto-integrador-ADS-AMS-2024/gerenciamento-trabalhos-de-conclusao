const express = require("express")

// Habilita a leitura de propriedades do arquivo .env
require("dotenv").config();

// Routes
const cursoRoutes = require("./routes/curso.js");
const disciplinaRoutes = require("./routes/disciplina.js");
const turmaRoutes = require("./routes/turma.js");
const professorRoutes = require("./routes/turma.js");
const alunoRoutes = require("./routes/turma.js");
const db = require("./db/connection.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

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

app.listen(process.env.PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});