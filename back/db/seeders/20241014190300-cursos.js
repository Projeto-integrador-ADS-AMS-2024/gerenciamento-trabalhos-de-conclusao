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

    return queryInterface.bulkInsert('cursos', [
      {
        nome: "Análise e Desenvolvimento de Sistemas",
        duracao: "4 anos",
        tipoPeriodo: "Semestral",
        turno: "noturno, verpertino",
        coordenadorId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Análise e desenvolvimento de sistemas AMS",
        duracao: "2 anos",
        tipoPeriodo: "Anual",
        turno: "noturno, matutino",
        coordenadorId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Comércio exterior",
        duracao: "4 anos",
        tipoPeriodo: "Semestral",
        turno: "vespertino",
        coordenadorId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete("cursos", null, {});
  }
};
