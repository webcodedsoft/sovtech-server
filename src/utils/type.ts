export type Results = {
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: string;
};

type ResponseData = {
  count: number;
  next: string;
  previous: string;
  results: Results[];
};

export type SwapiResponseType = {
  data: ResponseData;
};

export enum SwapiCallTypes {
  GET_PEOPLE = 'GET_PEOPLE',
  GET_PEOPLE_BY_NAME = 'GET_PEOPLE_BY_NAME',
}

export type GetPeopleProp = {
  prop: string | number;
  type: SwapiCallTypes;
};
