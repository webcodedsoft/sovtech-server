import { peoples, getPeopleByName } from './query';

const resolvers = {
  Query: {
    peoples,
    getPeopleByName,
  },
};

export default resolvers;
