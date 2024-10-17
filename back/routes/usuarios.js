const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// Rota para listar todos os usuarios
router.get('/usuarios', usuariosController.getAllUsuarios);