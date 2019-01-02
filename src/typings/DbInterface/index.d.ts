import * as Sequelize from "sequelize";

export interface DbInterface{
    sequelize: Sequelize.Sequelize;
    Sequelize: Sequelize.SequelizeStatic;
}