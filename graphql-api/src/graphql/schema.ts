import { makeExecutableSchema } from 'graphql-tools'
import { merge } from 'lodash';
import { Query } from './query';
import { Mutation } from './mutation';

import { messageTypes } from './resources/message/message.schema';
import { userTypes } from './resources/user/user.schema';

import { messageResolvers } from './resources/message/message.resolvers';
import { userResolvers } from './resources/user/user.resolvers';

const resolvers = merge(
    messageResolvers,
    userResolvers
);

const SchemaDefinition = `
    type Schema{
        query: Query
        mutation: Mutation
    }
`;

export default makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        Query,
        Mutation,
        messageTypes,
        userTypes
    ],
    resolvers
});