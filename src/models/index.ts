import { DbInterface } from './../typings/DbInterface';
import * as Sequelize from 'sequelize';


export const createModels = (dbConfigs: any): DbInterface => {
        const { database, username, password, params } = dbConfigs;
        const sequelize = new Sequelize(database, username, password, params);

    const db: DbInterface = {
        sequelize,
        Sequelize,
    }

    Object.keys(db).forEach(modelName => {
        if (db[modelName].associate) {
          db[modelName].associate(db);
        }
    });

    return db;
};