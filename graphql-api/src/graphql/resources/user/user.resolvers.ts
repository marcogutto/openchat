import { GraphQLResolveInfo } from 'graphql';

import { UserInstance } from '../../../models/UserModel';
import { DbConnection } from '../../../interfaces/DbConnectionInterface';
import { Transaction } from 'sequelize';
import { handlerError } from '../../../utils/utils';

export const userResolvers = {

    Query:{
      users: (parent, { first = 10, offset = 0 }, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
          return db.User
                .findAll({
                    limit: first,
                    offset: offset
                })
                .catch(handlerError);
      },
      user: (parent, {username}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
          return db.User
                .find({
                    where: {username: username}
                })
                .then((user: UserInstance) => {
                    if(!user) throw new Error(`User with username ${username} not found`);                   

                    return user;
                })
                .catch(handlerError);
      }
    },

    Mutation: {
        createUser: (parent, {input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.sequelize.transaction((t: Transaction) => {
                return db.User
                    .create(input, {transaction: t});
            })
            .catch(handlerError);
        }
    }

};
