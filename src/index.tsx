import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Root from './app/Root';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
// } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'https://flyby-router-demo.herokuapp.com/',
//   cache: new InMemoryCache(),
// });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <ApolloProvider client={client}>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  // </ApolloProvider>
);
