import { ApolloError } from 'apollo-server-express';
import { getPeople, getPersonDetail } from '../../utils';
import { SwapiCallTypes } from '../../utils/type';

const getPeopleByName = async (_parent: any, args: any, __: any) => {
    try {
        const { name } = args;

        const peopleResponse = await getPeople({
            prop: name,
            type: SwapiCallTypes.GET_PEOPLE_BY_NAME,
        });
        return { ...peopleResponse.results[0], homeworld: getPersonDetail(peopleResponse.results[0].homeworld) };
    } catch (error) {
        return new ApolloError('Something Went wrong');
    }
};

export default getPeopleByName;
