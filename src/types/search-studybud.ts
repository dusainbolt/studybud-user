import { User } from './user';

export type SearchStudybudInput = {
  gender?: string;
  limit?: number;
  mission?: string;
  offset?: number;
  point?: number[];
  pointValue?: string;
  standard?: string;
  topic?: string;
};

export type SearchStudybudOutput = {
  user: User;
};