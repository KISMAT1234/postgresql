
export default {
  async up (queryInterface, Sequelize) {
      
      
       await queryInterface.bulkInsert('People', [{
         name: 'John Doe',
         isBetaMember: false
       }], {});
      
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
