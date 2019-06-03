import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import  TemplateAppBar  from  './components/admin/AdminComponent/TemplateAppBar';
import  TemplateFooterBar  from  './components/admin/AdminComponent/TemplateFooterBar';

import UserHome from './components/user/PageComponent/UserHome';
import AnimeDetail from './components/user/PageComponent/AnimeDetail';

import  FilmsList from './components/admin/PageComponent/FilmsList'
import  FilmCreate  from './components/admin/PageComponent/FilmCreate'
import  FilmUpdate  from './components/admin/PageComponent/FilmUpdate'
import  FilmDetail  from './components/admin/PageComponent/FilmDetail'

const Admin = ({ match }) => (
    <React.Fragment>
    <TemplateAppBar/>
      <Switch>
        <Route path={`${match.path}/`} exact component={FilmsList} />
        <Route path={`${match.path}/film`} exact component={FilmsList} />
        <Route path={`${match.path}/film/add`}  component={FilmCreate} />
        <Route path={`${match.path}/film/detail/:pk`} component={FilmDetail} />
        <Route path={`${match.path}/film/update/:pk`} component={FilmUpdate} />
      </Switch>
    <TemplateFooterBar/>
    </React.Fragment>
)

const NotFound = () => (
  <div>404 NotFound</div>
)

const Content = () => (
    <Switch>
      <Route path="/" exact component={UserHome} />
      <Route path="/admin" component={Admin} />
      <Route path="/:kode" component={AnimeDetail} />
      <Route component={NotFound} />
    </Switch>
)
// Kode harus paling bawah
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