import { Sequelize } from "sequelize";
import { createUserModel } from "./postgres/model/userSchema.js";
import config from "./config/config.js";

    const {username,  password, database , host , dialect , port} = config.development
    const sequelize = new Sequelize(database, username, password, {
        host:host,
        dialect:dialect
    });

    // let UserModel = null
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        // UserModel = await createUserModel(sequelize)
        await sequelize.sync()
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

export default  sequelize
