import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Header, Container, Button, Grid, Item } from 'semantic-ui-react'
import TemplateContainer from './TemplateContainer'
import ice from './image/ice.jpg'
import {showSideBar} from '../store/sideBar'
import {connect} from 'react-redux'

class Templates extends Component {
  constructor() {
    super()
  }

  componentDidMount(){
    this.props.showSideBar()
  }
  render() {
    return (
      <div style={{ backgroundColor: '#D1FFD7', maxHeight: '100vh', maxWidth: '100vw', overflow: "scroll" }}>

      <Container style={styles.containerStyle}>
        <Header style={styles.subHeaderStyle}>Choose a template</Header>

        {/* these containers are buttons to the customize project page, we will need to add functionality to copy the appropriate template when they are pressed*/}
        <Grid columns='1'>
          <Grid.Column>
            <Item.Group>
              <Item>
                <Item.Image size='medium' src = {ice}/>
                <Item.Content>
                  <Item.Header>
                    Artists
                  </Item.Header>
                  <Item.Description>
                    This is some description for the user
                  </Item.Description>
                </Item.Content>
              </Item>
              <text style = {styles.mobileTitle}>Artists</text>
                <Button>Link to create template</Button>
                <Button>Button to preview modal</Button>
            </Item.Group>
            <Item.Group>
              <Item>
                <Item.Image size='medium' src = {ice}/>
                <Item.Content>
                  <Item.Header>
                    Artists
                  </Item.Header>
                  <Item.Description>
                    This is some description for the user
                  </Item.Description>
                </Item.Content>
              </Item>
              <text style = {styles.mobileTitle}>Artists</text>
                <Button>Link to create template</Button>
                <Button>Button to preview modal</Button>
            </Item.Group>
            <Item.Group>
              <Item>
                <Item.Image size='medium' src = {ice}/>
                <Item.Content>
                  <Item.Header>
                    Artists
                  </Item.Header>
                  <Item.Description>
                    This is some description for the user
                  </Item.Description>
                </Item.Content>
              </Item>
              <text style = {styles.mobileTitle}>Artists</text>
                <Button>Link to create template</Button>
                <Button>Button to preview modal</Button>
            </Item.Group>
          </Grid.Column>

            <Link to='/create'>
            </Link>
              {/* <TemplateContainer /> */}
        </Grid>
      </Container>
      </div>

    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showSideBar: () => dispatch(showSideBar()),
  }
}

export default connect(null,mapDispatchToProps)(Templates);


const styles = {
  containerStyle: {
    alignContent: 'center',
    margin: 20,
  },

  headerStyle: {
    alignContent: 'center',
    fontSize: 40
  },
  subHeaderStyle: {
    fontSize: 25,
    color: '#4a4b4c'
  },
  mobileTitle: {
    fontSize: 40
  }
}
