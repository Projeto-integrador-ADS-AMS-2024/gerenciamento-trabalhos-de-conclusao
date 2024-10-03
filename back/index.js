import express from 'express'
import config from 'dotenv'

// Habilitar a leitura de propriedades do arquivo .env
config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
    return res.json("Rodando");
});

app.listen(process.env.PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});