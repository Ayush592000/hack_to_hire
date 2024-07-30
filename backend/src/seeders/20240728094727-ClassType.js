'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('ClassTypes', [{
      id: 1,
      classType: "Economy",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      classType: "Premium",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      classType: "First Class",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      classType: "Business ",
      createdAt: new Date(),
      updatedAt: new Date()
    },], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ClassTypes', null, {});
  }
};
