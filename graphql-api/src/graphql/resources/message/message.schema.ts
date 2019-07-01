const messageTypes = `

    type Message {
      id: ID!
      content: String!
      fromUser: User!
      toUser: User!
      createdAt: String!
      updatedAt: String!
    }

    input MessageInput {
      content: String!
      fromUser: Int!
      toUser: Int!
    }

`;

const messageQueries = `
    messagesByFromUserAndToUser(fromUser: Int!, toUser: Int!, first: Int, offset: Int): [Message!]!
`;

const messageMutations = `
    createMessage(input: MessageInput!): Message
`;

export {
  messageTypes,
  messageQueries,
  messageMutations
}
