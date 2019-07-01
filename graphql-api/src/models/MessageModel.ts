import * as Sequelize from 'sequelize';
import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import sequelize = require('sequelize');
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface MessageAttributes{
    id?:number;
    content?:string;
    fromUser:number;
    toUser:number;
    createdAt:string;
    updatedAt:string;
}

export interface MessageInstance extends Sequelize.Instance<MessageAttributes>{

}

export interface MessageModel extends BaseModelInterface, Sequelize.Model<MessageInstance, MessageAttributes>{

}

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): MessageModel => {
    const Message: MessageModel = sequelize.define('Message', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        tableName: 'messages'
    });

    Message.associate = (models: ModelsInterface): void => {
        Message.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                field: 'fromUser',
                name: 'fk_fromUser'
            }
        });

        Message.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                field: 'toUser',
                name: 'fk_toUser'
            }
        });
    };

    return Message;
}