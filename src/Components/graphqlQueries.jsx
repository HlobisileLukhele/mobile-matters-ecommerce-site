import { gql } from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    products {
      id
      name
      image
      description
      price
    }
  }
`;
