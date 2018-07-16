import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import AboutPage from '../components/AboutPage'
import HomePage from '../components/HomePage'
import Main from '../components/Main'
import React from "react";

const renderHomepage = () => <HomePage />
const renderAboutpage = () => <AboutPage />

const Routes = () => (
  <Router>
    <Main>
      <Switch>
        <Route exact path="/"             render={ renderHomepage } />
        <Route exact path="/About"        render={ renderAboutpage } />

        <Redirect path="/" to="/"/>
      </Switch>
    </Main>
  </Router>
)

export default Routes
