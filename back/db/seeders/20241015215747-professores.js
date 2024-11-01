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

    return queryInterface.bulkInsert("professores", [
      {
        matricula: 'P001',
        nome: 'Cristina',
        papel: 'Professor',
        cpf: '092.536.930-61',
        email: 'cristina@example.com',
        senha: hashPassword('senha123'),
        dataNascimento: '1980-05-10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        matricula: 'P002',
        nome: 'Adelson',
        papel: 'Coordenador',
        cpf: '781.856.530-20',
        email: 'adelson@example.com',
        senha: hashPassword('senha456'),
        dataNascimento: '1985-07-20',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        matricula: 'P003',
        nome: 'Adalberto',
        papel: 'Coordenador',
        cpf: '570.144.370-11',
        email: 'adalberto@example.com',
        senha: hashPassword('senha789'),
        dataNascimento: '1990-09-15',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        matricula: 'P004',
        nome: 'Rony',
        papel: 'Professor',
        cpf: '922.256.910-53',
        email: 'rony@example.com',
        senha: hashPassword('senha000'),
        dataNascimento: '1982-12-30',
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
