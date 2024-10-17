const express = require('express');
const router = express.Router();
const turmaController = require('../controllers/turmaController');

//Rota para exibir pagina da ferramenta curso
router.get('/pageTurmas', turmaController.pageTurmas);

// Rota para criar uma nova turma
router.post('/turmas', turmaController.createTurma);

// Rota para listar todas as turmas
router.get('/turmas', turmaController.getAllTurmas);

// Rota para buscar uma turma por ID
router.get('/turmas/:id', turmaController.getTurmaById);

// Rota para editar uma turma
router.put('/turmas/:id', turmaController.editTurma);

// Rota para deletar uma turma
router.delete('/turmas/:id', turmaController.deleteTurma);

module.exports = router;
