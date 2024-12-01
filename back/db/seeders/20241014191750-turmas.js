'use strict';

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

    return queryInterface.bulkInsert("turmas", [
      {
        nome: "1º ano AMS",
        cursoId: 2,
        disciplinaId: 3,
        turno: "Noite",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "5º Semestre ADS",
        cursoId: 1,
        disciplinaId: 1,
        turno: "Noite",
        createdAt: new Date(),
        updatedAt: new Date(),
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

    return queryInterface.bulkDelete("turmas", null, {});
  }
};
