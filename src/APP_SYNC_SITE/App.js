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
    uri: 'https://wta4olpru5an3oj3pnmtzizcri.appsync-api.ap-south-1.amazonaws.com/graphql',
    cache: new InMemoryCache(),
    headers: {
      'x-api-key': "da2-tmdgl5gck5h5xmcnwh3ohwwngy"
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
