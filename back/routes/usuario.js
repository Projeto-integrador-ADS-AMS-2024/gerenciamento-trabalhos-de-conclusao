const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

//rota para renderizar pagina de cadastro de usuarios
router.get('/pageUsuariosCadastrar', usuarioController.pageUsuariosCadastro);

//rota para renderizar pagina de importar de usuarios
router.get('/pageUsuariosImportar', usuarioController.pageUsuariosImportar);

// Rota para listar todos os usuarios
router.get('/usuarios', usuarioController.getAllUsuarios);

module.exports = router;

