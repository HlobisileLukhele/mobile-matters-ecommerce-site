import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
 link: new HttpLink({
    uri: 'https://localhost:3000',
 }),
 cache: new InMemoryCache(),
});

    ReactDOM.render(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>,
        document.getElementById('root')
    );

export default App ;