import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import UserHome from './components/user/PageComponent/UserHome';

import  FilmsList from './FilmsList'
import  FilmCreate  from './FilmCreate'
import  FilmUpdate  from './FilmUpdate'
import  FilmDetail  from './FilmDetail'

// Components Material UI

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';


const Content = () => (
    <Switch>
      <Route path="/" exact component={UserHome} />
    </Switch>
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Content/>                
      </BrowserRouter>
    );
  }
}

export default App;