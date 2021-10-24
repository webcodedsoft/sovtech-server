import { ApolloError } from 'apollo-server-errors';
import axios from 'axios';
import {
  GetPeopleProp,
  Results,
  SwapiCallTypes,
  SwapiResponseType,
} from './type';

/**
 * @param  {} {prop=1}
 * @param  {} type
 * @param  {GetPeopleProp} }
 * @returns character details from the swapi response
 */
const getPeople = async ({
  prop = 1,
  type,
}: GetPeopleProp): Promise<Results[]> => {
  // swapi default url
  const swapiUrl = 'https://swapi.dev/api/people/';
  // customize url depending on the query making the call
  const url =
    type === SwapiCallTypes.GET_PEOPLE
      ? `${swapiUrl}?page=${prop}`
      : `${swapiUrl}?search=${prop}`;

  try {
    const {
      data: { results },
    }: SwapiResponseType = await axios.get(url);

    // map out required response values
    return results.map((resultValue) => {
      const { name, height, mass, gender, homeworld } = resultValue;
      return {
        name,
        height,
        mass,
        gender,
        homeworld,
      };
    });
  } catch (error) {
    throw new ApolloError('star wars api error');
  }
};

export default getPeople;
