'use strict';

const hashPassword = require('../../utils/hashPassword');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert("alunos", [
      {
        ra: 'A001',
        nome: 'Gabriel Mendes',
        cpf: '906.015.900-40',
        email: 'gabriel@example.com',
        senha: hashPassword('senha123'),
        dataNascimento: '2000-05-10',
        turmaId: 1, // Supondo que a turma 1 já existe
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ra: 'A002',
        nome: 'João Vitor',
        cpf: '276.450.650-36',
        email: 'joao@example.com',
        senha: hashPassword('senha456'),
        dataNascimento: '2001-07-20',
        turmaId: 2, // Supondo que a turma 2 já existe
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ra: 'A003',
        nome: 'Henrique Machado',
        cpf: '890.973.880-40',
        email: 'henrique@example.com',
        senha: hashPassword('senha789'),
        dataNascimento: '2002-09-15',
        turmaId: 2, // Supondo que a turma 3 já existe
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ra: 'A004',
        nome: 'Danilo Rodrigues',
        cpf: '910.954.320-10',
        email: 'danilo@example.com',
        senha: hashPassword('senha000'),
        dataNascimento: '2003-12-30',
        turmaId: 1, // Supondo que a turma 4 já existe
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("professores", null, {});
  }
};
