const userTypes = `

    # User Definition Type
    type User {
        id: ID!,
        username: String!
    }

    input UserCreateInput{
        username: String!
    }
`;

const userQueries = `
    users(first: Int, offset: Int): [User!]!
    user(id: ID!): User
`;

const userMutations = `
    createUser(input: UserCreateInput!): User
`;

export {
  userTypes,
  userQueries,
  userMutations
}
