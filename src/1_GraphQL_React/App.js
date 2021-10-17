import React from 'react'
import SongList from './Component/SongList'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import './style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './Component/Error';
import AddSong from './Component/AddSong';
import OneSong from './Component/OneSong';



const client = new ApolloClient({
  uri: 'https://lsp2i6imarbzjnxteybp2dnrhe.appsync-api.ap-northeast-1.amazonaws.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    "X-api-key": "da2-qblslfqv2jg43lu7nlaeysxrh4"
  },
  // defaultOptions: defaultOptions
});


const App = () => {
  return <BrowserRouter>
    <ApolloProvider client={client}>
      <Switch>
        <Route exact path="/" component={SongList} />
        <Route path="/song/:id" component={OneSong} />
        <Route path="/add" component={AddSong} />
        <Route path="*" component={Error} />
      </Switch>
    </ApolloProvider>
  </BrowserRouter>
}

export default App
