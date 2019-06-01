import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import  FilmsList from './FilmsList'
import  FilmCreate  from './FilmCreate'
import  FilmUpdate  from './FilmUpdate'
import  FilmDetail  from './FilmDetail'

// Components Material UI

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import TemplateAppBar from './components/admin/TemplateAppBar';

const Content = () => (
    <Box my={2}>
      <Container>
        <Switch>
          <Route path="/" exact component={FilmsList} />
          <Route path="/film/update/:pk" exact component={FilmUpdate} />
          <Route path="/film/add/" component={FilmCreate} />
          <Route path="/film/detail/:pk" component={FilmDetail} />
        </Switch>
      </Container>
    </Box>
)

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <TemplateAppBar/>
        <Content/>
      </BrowserRouter>
    );
  }
}

export default App;