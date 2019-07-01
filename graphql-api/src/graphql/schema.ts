import { makeExecutableSchema } from 'graphql-tools'

const users: any[] = [
    {
        id: 1,
        username: 'marcogutto'
    },
    {
        id: 2,
        username: 'marcoseabra'
    }
];

const typeDefs = `
    type User {
        id: ID!
        username: String!
    }

    type Query {
        allUsers: [User!]!
    }

    type Mutation {
        createUser(username: String!): User
    }
`;

const resolvers = {
    Query: {
        allUsers: () => users
    }, 
    Mutation: {
        createUser: (parent, args) => {
            const newUser = Object.assign({id: users.length+1}, args);
            users.push(newUser);
            return newUser;
        }
    }
};

export default makeExecutableSchema({typeDefs, resolvers});