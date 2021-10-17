import React from 'react'
import SongList from './Component/SongList'
import './style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './Component/Error';
import AddSong from './Component/AddSong';
import OneSong from './Component/OneSong';



const App = () => {
  return <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SongList} />
        <Route path="/song/:id" component={OneSong} />
        <Route path="/add" component={AddSong} />
        <Route path="*" component={Error} />
      </Switch>
  </BrowserRouter>
}

export default App
