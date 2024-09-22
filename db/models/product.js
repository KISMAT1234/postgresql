'use strict';

import sequelize from '../../db';
import {DataTypes, Sequelize} from 'sequelize'
export const Product = sequelize.define('Product', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  productName: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.DECIMAL
  },
  size: {
    type: DataTypes.ENUM
  },
  userId: {
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
},{
  paranoid:true,
  freezeTableName : true,
  modelName:'user'
})
