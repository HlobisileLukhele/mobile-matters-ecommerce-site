const { gql } = require('apollo-server');

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
    image: String!
    description: String!
    category: String!
  }

  type Query {
    products: [Product]
    productsByCategory(category: String!): [Product]
  }
`;

module.exports = typeDefs;



