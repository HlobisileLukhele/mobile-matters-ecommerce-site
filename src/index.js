import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import { motion } from "framer-motion";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

//set up client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});


client
  .query({
    query: gql`
      query GetProducts{
        Products{
          id
          name
          price
          categoryId
          description
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider >
);

reportWebVitals();
