import React from 'react'
import Navbar from "./Navbar"
import './index.css';
import WatchSection from './WatchSection';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ViewWatch from "./ViewWatch";
import { ContextGlobal } from "./ContextGlobal";
import Checkout from './Checkout';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {


  const client = new ApolloClient({
    uri: 'https://7d2nabgcfndqlbaoppald2nrlu.appsync-api.ap-northeast-1.amazonaws.com/graphql',
    cache: new InMemoryCache(),
    headers: {
      'x-api-key': "da2-so3rqssq2raw7iogan3bdqx6qi"
    }
  });


  return <BrowserRouter>
    <ApolloProvider client={client}>
      <ContextGlobal>
        <ToastContainer autoClose="2000" />
        <Navbar />
        <Switch>
          <Route path="/" exact component={WatchSection} />
          <Route exact path="/watch/:id" component={ViewWatch} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </ContextGlobal>
    </ApolloProvider>
  </BrowserRouter>
}

export default App;
