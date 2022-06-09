import { gql } from '@apollo/client';
import { graphQLReq } from '@request/graphql';
import { GetUserInput } from '@type/user';

const query = gql`
  query GetUser($input: GetUserInput!) {
    getUser(input: $input) {
      _id
      avatar
      birthday
      createdAt
      email
      firstName
      gender
      lastName
      name
      roles
      phone
      description
      socialId
      socialType
      status
      updatedAt
      username
    }
  }
`;

export const getUserQuery = async (variables: GetUserInput): Promise<any> => {
  return await graphQLReq.query(query, { input: variables }, 'getUser');
};
