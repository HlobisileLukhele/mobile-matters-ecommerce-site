import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ApolloServer, gql } from 'apollo-server-express';
import { typeDefs } from './Schema/type-defs'; 
import { resolvers } from './Schema/resolvers'; 


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const client = new ApolloClient({
  uri: 'http://localhost:3000',
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);


console.log('GraphQL server running at http://localhost:4000/graphql');
