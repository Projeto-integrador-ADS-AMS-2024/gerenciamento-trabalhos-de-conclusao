const express = require('express');
const disciplinaController = require('../controllers/disciplinaController');
const router = express.Router();

router.get('/disciplinas', disciplinaController.getAllDisciplinas);
router.get('/disciplinas/:id', disciplinaController.getDisciplinaById);

router.post('/disciplinas', disciplinaController.createDisciplina);

router.put('/disciplinas/:id', disciplinaController.editDisciplina);
router.delete('/disciplinas/:id', disciplinaController.deleteDisciplina);

module.exports = router;