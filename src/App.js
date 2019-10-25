import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;