import React, { Component } from 'react'
import { LandingPage, Templates, Creation } from './components'
import { Route, Switch } from 'react-router-dom'


class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/templates" component={Templates} />
        <Route exact path="/create" component={Creation} />
      </Switch>
    )
  }
}

export default Routes
