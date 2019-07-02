import { GraphQLResolveInfo } from 'graphql';

import { MessageInstance } from '../../../models/MessageModel';
import { DbConnection } from '../../../interfaces/DbConnectionInterface';
import { Transaction } from 'sequelize';
import { handlerError } from '../../../utils/utils';

export const messageResolvers = {

    Message: {
        fromUser: (message, args, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.User
                .findById(message.get('fromUser'))
                .catch(handlerError);
        },

        toUser: (message, args, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.User
                .findById(message.get('toUser'))
                .catch(handlerError);
        },
    },

    Query:{
      messagesByFromUserAndToUser: (parent, {fromUser, toUser, fisrt = 10, offset = 0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
          return db.Message
                .findAll({
                    where: {fromUser: fromUser, toUser: toUser},
                    limit: fisrt,
                    offset: offset
                })
                .catch(handlerError);
                
      }
    },

    Mutation: {
        createMessage: (parent, {input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.sequelize.transaction((t: Transaction) => {
                return db.Message
                    .create(input, {transaction: t});
            })
            .catch(handlerError);
        }
    }

};
