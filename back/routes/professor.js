const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

// Rota para criar um novo professor
router.post('/professores', professorController.createProfessor);

// Rota para listar todos os professores
router.get('/professores', professorController.getAllProfessores);

// Rota para buscar um professor por ID
router.get('/professores/:id', professorController.getProfessorById);

// Rota para editar um professor
router.put('/professores/:id', professorController.editProfessor);

// Rota para deletar um professor
router.delete('/professores/:id', professorController.deleteProfessor);

module.exports = router;
