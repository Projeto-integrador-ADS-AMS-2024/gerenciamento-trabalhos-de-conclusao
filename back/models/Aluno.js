import db from '../db/connection.js';

const Aluno = db.define('aluno', {
    
});

Aluno.sync({ alter: true });