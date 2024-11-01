const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Professor = require('../models/Professor');
const Aluno = require('../models/Aluno');
const SECRET_KEY = "sua_chave_secreta"; 

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificar se o email existe nas tabelas 'Alunos' e 'Professores'
    const user = await Aluno.findOne({ where: { email } }) || await Professor.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    // Verificar se a senha está correta
    const senhaCorreta = await bcrypt.compare(password, user.senha);
    if (!senhaCorreta) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    // Gerar JWT
    const token = jwt.sign({ 
        id: user.ra || user.matricula, 
        email: user.email,
        nome: user.nome,
        role: user.papel || "Aluno"
    }, SECRET_KEY, { expiresIn: '7d' });

    return res.json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro no servidor" });
  }
});

module.exports = router;
