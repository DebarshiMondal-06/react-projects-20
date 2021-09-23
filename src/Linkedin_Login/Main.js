import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Details from './Details';



const Main = () => {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/details" component={Details} />
    </Switch>
  </BrowserRouter>
}

export default Main;
