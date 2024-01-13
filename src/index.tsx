import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Root from './app/Root';
import { RecoilRoot } from 'recoil';
import { ApolloProvider } from '@apollo/client';
import client from './shared/api/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <RecoilRoot>
      <React.StrictMode>
        <Root />
      </React.StrictMode>
    </RecoilRoot>
  </ApolloProvider>
);
