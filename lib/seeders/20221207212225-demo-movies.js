'use strict';

const db = require('../models');

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
    await db.Movies.bulkCreate([
      {
        title: 'Titanic',
        description: 'boat crash ice',
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/10/a7/15/67/photo1jpg.jpg',
        releaseYear: 1994,
        genre_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'dwadwdwauhydw',
        description: 'ice',
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/10/a7/15/67/photo1jpg.jpg',
        releaseYear: 2004,
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'budwadwudjwa',
        description: '30000',
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/10/a7/15/67/photo1jpg.jpg',
        releaseYear: 2021,
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
