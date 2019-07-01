import { messageQueries } from './resources/message/message.schema';
import { userQueries } from './resources/user/user.schema';

const Query = `
    type Query{
        ${messageQueries}
        ${userQueries}
    }
`;

export {
    Query
}
