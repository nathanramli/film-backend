import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import  FilmsList from './FilmsList'
import  FilmCreate  from './FilmCreate'
import  FilmUpdate  from './FilmUpdate'
import  FilmDetail  from './FilmDetail'

// Components Material UI

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import TemplateAppBar from './components/TemplateAppBar';

const BaseLayout = () => (
  <React.Fragment>
   <TemplateAppBar/>

    <Box my={2}>
      <Container>
        <Route path="/" exact component={FilmsList} />
        <Route path="/film/update/:pk" exact component={FilmUpdate} />
        <Route path="/film/add/" component={FilmCreate} />
        <Route path="/film/detail/:pk" component={FilmDetail} />
      </Container>
    </Box>

  </React.Fragment>
)

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <BaseLayout/>
      </BrowserRouter>
    );
  }
}

export default App;