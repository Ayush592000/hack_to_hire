'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('FlightData', [
      {
        id: 1,
        from: "Delhi",
        to: "Mumbai",
        date: "2024-08-01",
        time: "2024-08-01",
        airport: "Delhi Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        from: "Mumbai",
        to: "Bengaluru",
        date: "2024-08-01",
        time: "2024-08-01",
        airport: "Mumbai Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        from: "Bengaluru",
        to: "Kolkata",
        date: "2024-08-02",
        time: "2024-08-02",
        airport: "Bengaluru Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        from: "Kolkata",
        to: "Chennai",
        date: "2024-08-02",
        time: "2024-08-02",
        airport: "Kolkata Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        from: "Chennai",
        to: "Hyderabad",
        date: "2024-08-03",
        time: "2024-08-03",
        airport: "Chennai Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        from: "Hyderabad",
        to: "Delhi",
        date: "2024-08-03",
        time: "2024-08-03",
        airport: "Hyderabad Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        from: "Delhi",
        to: "Mumbai",
        date: "2024-08-04",
        time: "2024-08-04",
        airport: "Delhi Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        from: "Mumbai",
        to: "Bengaluru",
        date: "2024-08-04",
        time: "2024-08-04",
        airport: "Mumbai Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        from: "Bengaluru",
        to: "Kolkata",
        date: "2024-08-05",
        time: "2024-08-05",
        airport: "Bengaluru Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        from: "Kolkata",
        to: "Chennai",
        date: "2024-08-05",
        time: "2024-08-05",
        airport: "Kolkata Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        from: "Chennai",
        to: "Hyderabad",
        date: "2024-08-06",
        time: "2024-08-06",
        airport: "Chennai Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        from: "Hyderabad",
        to: "Delhi",
        date: "2024-08-06",
        time: "2024-08-06",
        airport: "Hyderabad Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        from: "Delhi",
        to: "Mumbai",
        date: "2024-08-07",
        time: "2024-08-07",
        airport: "Delhi Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        from: "Mumbai",
        to: "Bengaluru",
        date: "2024-08-07",
        time: "2024-08-07",
        airport: "Mumbai Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        from: "Bengaluru",
        to: "Kolkata",
        date: "2024-08-08",
        time: "2024-08-08",
        airport: "Bengaluru Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        from: "Kolkata",
        to: "Chennai",
        date: "2024-08-08",
        time: "2024-08-08",
        airport: "Kolkata Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        from: "Chennai",
        to: "Hyderabad",
        date: "2024-08-09",
        time: "2024-08-09",
        airport: "Chennai Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        from: "Hyderabad",
        to: "Delhi",
        date: "2024-08-09",
        time: "2024-08-09",
        airport: "Hyderabad Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        from: "Delhi",
        to: "Mumbai",
        date: "2024-08-10",
        time: "2024-08-10",
        airport: "Delhi Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        from: "Mumbai",
        to: "Bengaluru",
        date: "2024-08-10",
        time: "2024-08-10",
        airport: "Mumbai Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 21,
        from: "Bengaluru",
        to: "Kolkata",
        date: "2024-08-11",
        time: "2024-08-11",
        airport: "Bengaluru Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22,
        from: "Kolkata",
        to: "Chennai",
        date: "2024-08-11",
        time: "2024-08-11",
        airport: "Kolkata Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 23,
        from: "Chennai",
        to: "Hyderabad",
        date: "2024-08-12",
        time: "2024-08-12",
        airport: "Chennai Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 24,
        from: "Hyderabad",
        to: "Delhi",
        date: "2024-08-12",
        time: "2024-08-12",
        airport: "Hyderabad Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 25,
        from: "Delhi",
        to: "Mumbai",
        date: "2024-08-13",
        time: "2024-08-13",
        airport: "Delhi Airport",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
      , {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('FlightData', null, {});
  }
};
