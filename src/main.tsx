import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NhostClient } from '@nhost/nhost-js';
import { NhostApolloProvider } from '@nhost/react-apollo';

const nhost = new NhostClient({
  backendUrl: 'http://localhost:1337',
});

ReactDOM.render(
  <React.StrictMode>
    <NhostApolloProvider nhost={nhost} connectToDevTools={true}>
      <App />
    </NhostApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
