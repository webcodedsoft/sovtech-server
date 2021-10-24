import { gql } from 'apollo-server-express';

const starWarsTypeDefs = gql`
  type Result {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }

  type HomeWorld {
    name: String
    climate: String
    gravity: String
    terrain: String
    population: String
  }

  type SingleResult {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: HomeWorld
  }

  type PeopleResponse {
    count: String
    results: [Result]
  }

  type Query {
    peoples(pageNumber: Int): PeopleResponse
    getPeopleByName(name: String!): SingleResult
  }
`;

export default starWarsTypeDefs;
