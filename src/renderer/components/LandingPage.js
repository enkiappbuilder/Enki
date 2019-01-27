import React, { Component } from "react";
import copy from '../../functions/fsCopy'
import { Link } from 'react-router-dom'
import { Header, Container } from 'semantic-ui-react'

class LandingPage extends Component {
  render() {
    return (
      <Container>
        <Header>Create your app</Header>
        <Header>Choose a template</Header>
      </Container>
      <div>
        <h1> HI I AM LANDING PAGE </h1>
        <div>
          <Link to='/templates'>
            <button >
              CLICK ME TO GO TO TEMPLATES
            </button>
          </Link>
          <button onClick={() => copy()}> CLICK ME TO MAKE COPY OF APP TEMPLATE </button>

        </div>
      </div>
    );
  }
}

export default LandingPage;
