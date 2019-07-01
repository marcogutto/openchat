const userTypes = `
    
    # User Definition Type
    type User {
        id: ID!,
        username: String!
    }

    input UserCreateInput{
        username: String!
    }

    input UserUpdateInput{
        username: String!
    }
`;