const express = require("express")
// Habilita a leitura de propriedades do arquivo .env
require("dotenv").config();
const Turma = require("./models/Turma");
const Curso = require("./models/Curso");
const Disciplina = require("./models/Disciplina");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", async (req, res) => {
    await Curso.findAll();
    await Turma.findAll();
    await Disciplina.findAll();
    return res.json("/");
});

app.listen(process.env.PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});