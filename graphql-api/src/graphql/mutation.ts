import { messageMutations } from './resources/message/message.schema';
import { userMutations } from './resources/user/user.schema';

const Mutation = `
    type Mutation{
        ${messageMutations}
        ${userMutations}
    }
`;

export {
    Mutation
}
