import { gql } from 'apollo-server-express';

const starWarsTypeDefs = gql`
  type PeopleResponse {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }

  type Query {
    peoples(pageNumber: Int): [PeopleResponse]
    getPeopleByName(name: String!): PeopleResponse
  }
`;

export default starWarsTypeDefs;
