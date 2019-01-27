import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Header, Container, Button, Grid } from 'semantic-ui-react'
import TemplateContainer from './TemplateContainer'


class Templates extends Component {
  render() {
    return (
      <Container style={{
        alignContent: 'center',
        margin: 20
      }}>
        <Header>Create your app</Header>
        <Header>Choose a template</Header>

        {/* these containers are buttons to the customize project page, we will need to add functionality to copy the appropriate template when they are pressed*/}
        <TemplateContainer />
        <TemplateContainer />
        <TemplateContainer />


        <Link to='/create'>
          <button >
            CLICK ME TO GO TO CREATION / CUSTOMIZATION PAGE!
            </button>
        </Link>
      </Container>

    );
  }
}

export default Templates;
