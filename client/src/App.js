import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path='/' exact render={(props) => <SongList {...props} />} />

          <Route
            path='/song/new'
            render={(props) => <SongCreate {...props} />}
          />

          <Route
            path='/song/:id'
            render={(props) => <SongDetail {...props} />}
          />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
