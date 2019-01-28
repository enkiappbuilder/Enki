import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Header, Container, Button, Grid } from 'semantic-ui-react'
import TemplateContainer from './TemplateContainer'

class Templates extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Container style={styles.containerStyle}>
        <Header style={styles.headerStyle}>Create your app</Header>
        <Header style={styles.subHeaderStyle}>Choose a template</Header>

        {/* these containers are buttons to the customize project page, we will need to add functionality to copy the appropriate template when they are pressed*/}
        <Grid columns='equal'>
          <Grid.Column>
            <Link to='/create'>
              <TemplateContainer header='Artist App' />
            </Link>
          </Grid.Column>


          <Grid.Column>
            <Link to='/create'>
              <TemplateContainer header='Restaurant App' />
            </Link>
          </Grid.Column>

          <Grid.Column>
            <Link to='/create'>
              <TemplateContainer header='Small Business App' />
            </Link>
          </Grid.Column>

        </Grid>
      </Container>

    );
  }
}

export default Templates;


const styles = {
  containerStyle: {
    alignContent: 'center',
    margin: 20,
    textAlign: 'center'
  },

  headerStyle: {
    alignContent: 'center',
    fontSize: 40
  },
  subHeaderStyle: {
    fontSize: 25,
    color: '#4a4b4c'
  }
}
