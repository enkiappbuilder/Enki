import React, { Component } from 'react'
import { LandingPage, Templates, Creation, EditPage } from './components'
import { Route, Switch } from 'react-router-dom'


class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/templates" component={Templates} />
        <Route exact path="/create" component={Creation} />
        <Route exact path='/edit' component={EditPage}/>
      </Switch>
    )
  }
}

export default Routes
