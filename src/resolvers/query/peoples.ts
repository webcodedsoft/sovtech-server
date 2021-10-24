import { ApolloError } from 'apollo-server-express';
import { getPeople } from '../../utils';
import { SwapiCallTypes } from '../../utils/type';

const people = async (_parent: any, args: any, __: any) => {
  try {
    const { pageNumber } = args;

    return await getPeople({
      prop: pageNumber,
      type: SwapiCallTypes.GET_PEOPLE,
    });
  } catch (error) {
    return new ApolloError('Something Went wrong');
  }
};

export default people;
