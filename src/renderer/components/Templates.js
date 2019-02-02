import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Header, Container, Button, Grid, Item } from 'semantic-ui-react'
import TemplateContainer from './TemplateContainer'
import ice from './image/ice.jpg'
import {showSideBar} from '../store/sideBar'
import {connect} from 'react-redux'
import {chooseTemplate} from '../store/templateChoice'
import ModalPreview from './PreviewModal'
import copy from '../../functions/fsCopy.js'
import { enableCreate } from "../store/createStatus";

const fs = require('fs-extra')
class Templates extends Component {
  constructor(props) {
    super(props)
  }

  chooseTemplate(type){
    this.props.chooseTemplate(type)
  }

  componentDidMount(){
    this.props.showSideBar()
  }


  render() {

    return (
      <div style={{ maxHeight: '100vh', maxWidth: '100vw', overflow: "scroll" }}>

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
                    This is some description for the user
                    This is some description for the user
                    This is some description for the user
                    v
                    v
                    This is some description for the user
                    WOWOOWOOAWROWOWOAGafsja

                    ]ldsajgkjgha

                    gagjsdkjg
                  </Item.Description>
              <div style ={{display: 'flex', justifyContent: 'right'}}>
              <Link to='/create'>
                <Button onClick={()=>copy('../../template/mobiletemp')}>Link to create template</Button>
              </Link>
                <ModalPreview imagesource = {require('../../../public/images/artistTemplate.png')}/>
              </div>
                </Item.Content>
              </Item>
              <text style = {styles.mobileTitle}>Artists</text>
            </Item.Group>

          </Grid.Column>

            <Link to='/create'>
            </Link>
        </Grid>
      </Container>
      </div>

    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showSideBar: () => dispatch(showSideBar()),
    chooseTemplate: (type) => dispatch(chooseTemplate(type)),
    enableCreate: () => dispatch(enableCreate())
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
    fontSize: 40,
    paddingLeft: '90px'
  }
}
