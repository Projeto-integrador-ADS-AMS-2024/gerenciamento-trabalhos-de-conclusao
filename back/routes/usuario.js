const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rota para listar todos os usuarios
router.get('/usuarios', usuarioController.getAllUsuarios);

module.exports = router;

