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

    return queryInterface.bulkInsert("disciplinas", [
      {
        nome: "TG 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "TG 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Projeto Integrador",
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

    return queryInterface.bulkDelete("disciplinas", null, {});
  }
};
