const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

// Rota para criar um novo aluno
router.post('/alunos', alunoController.createAluno);

// Rota para listar todos os alunos
router.get('/alunos', alunoController.getAllAlunos);

// Rota para buscar um aluno por ID
router.get('/alunos/:id', alunoController.getAlunoById);

// Rota para editar um aluno
router.put('/alunos/:id', alunoController.editAluno);

// Rota para deletar um aluno
router.delete('/alunos/:id', alunoController.deleteAluno);

module.exports = router;
