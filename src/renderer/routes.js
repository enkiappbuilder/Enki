import React, { Component } from 'react'
import { Templates, Creation, EditPage, LandingPage, SubMenu} from './components'
import { Route, Switch } from 'react-router-dom'


class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/templates" component={Templates} />
        <Route exact path="/create" component={SubMenu} />
        <Route exact path='/edit' component={EditPage}/>
      </Switch>
    )
  }
}

export default Routes
