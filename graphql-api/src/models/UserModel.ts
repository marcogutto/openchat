import * as Sequelize from 'sequelize';
import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import sequelize = require('sequelize');

export interface UserAttributes {
    id?: number;
    username?:string;
    createdAt?:string;
    updatedAt?:string;
}

export interface UserInstance extends Sequelize.Instance<UserAttributes>, UserAttributes{

}

export interface UserModel extends BaseModelInterface, Sequelize.Model<UserInstance, UserAttributes>{

}

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): UserModel => {
    const User: UserModel = 
        sequelize.define('User', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: DataTypes.STRING(120),
                allowNull: false
            }
        },
        {
            tableName: 'users'
        });

    return User;
}