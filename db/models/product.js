'use strict';

import sequelize from '../../db';
import {Sequelize} from 'sequelize'
const Product = sequelize.define('Product', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  productName: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.DECIMAL
  },
  size: {
    type: Sequelize.ENUM
  },
  userId: {
    type: Sequelize.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
},{
  paranoid:true,
  freezeTableName : true,
  modelName:'user'
})
