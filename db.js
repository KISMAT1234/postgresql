import { Sequelize } from "sequelize";
import { createUserModel } from "./postgres/model/userSchema.js";

const connection = async() => {

    const sequelize = new Sequelize('database', 'username', 'password', {
        host: 'localhost',
        dialect:"postgres"
    });

    let UserModel = null
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        UserModel = await createUserModel(sequelize)
        await sequelize.sync()
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

}

export default {
  connection,
  UserModel
}