'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productName: {
        type: Sequelize.STRING
      },
      isFeatured:{
        type:Sequelize.BOOLEAN,
        defaultValue:false,
        allowNull : false,
      },
      productImage:{
        type:Sequelize.ARRAY(Sequelize.STRING),
         allowNUll : false
      },
      description:{
        type:Sequelize.TEXT,
        allowNull:false,
      },
      price: {
        type: Sequelize.DECIMAL
      },
      size: {
        type: Sequelize.ENUM('xl','2xl','3xl')
      },
      createdBy: {
        type: Sequelize.INTEGER,
        refrences: {
          model:'user',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Product');
  }
};