import React, { Component } from 'react'
import { Templates, Creation, EditPage, LandingPage, SubMenu} from './components'
import { Route, Switch } from 'react-router-dom'


class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/templates" component={Templates} />
        <Route  path="/create" component={SubMenu} />
        <Route  path='/edit' component={EditPage}/>
      </Switch>
    )
  }
}

export default Routes
