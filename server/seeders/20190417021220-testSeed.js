'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tests', [{
      testdata: 'knight to b3. checkmate.',
      firstName: 'DeepBlue',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    //This goes in the down function
    return queryInterface.bulkDelete('tests', {firstName: 'Gary'});
  }
};
