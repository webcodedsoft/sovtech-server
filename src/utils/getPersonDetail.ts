import { ApolloError } from 'apollo-server-errors';
import axios from 'axios';
import {
    GetPersonDetail,
} from './type';

/**
 * @param  {} {prop=1}
 * @param  {} type
 * @param  {GetPeopleProp} }
 * @returns character details from the swapi response
 */
const getPersonDetails = async (homeworldUrl: string): Promise<object> => {

    try {
        const {data: response} : GetPersonDetail = await axios.get(homeworldUrl);

        // map out required response values
        return response
    } catch (error) {
        throw new ApolloError('star wars api error');
    }
};

export default getPersonDetails;
