import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import AboutPage from '../components/AboutPage'
import ContactPage from '../components/ContactPage'
import Coverage from '../components/Coverage'
import HomeBuyer from '../components/HomeBuyer'
import HomeOwner from '../components/Homeowner'
import HomePage from '../components/HomePage'
import Main from '../components/Main'
import Order from '../components/Order'
import Quote from '../components/Quote'
import React from "react";

const Routes = () => (
  <Router>
    <Main>
      <Switch>
        <Route exact path="/"               component={ HomePage } />
        <Route exact path="/Contact"        component={ ContactPage } />
        <Route exact path="/About"          component={ AboutPage } />
        <Route exact path="/Homeowner"      component={ HomeOwner } />
        <Route exact path="/Homebuyer"      component={ HomeBuyer } />
        <Route exact path="/Quote"          component={ Quote } />
        <Route exact path="/Order"          component={ Order } />
        <Route exact path="/Coverage"       component={ Coverage } />

        <Redirect path="/" to="/"/>
      </Switch>
    </Main>
  </Router>
)

export default Routes
