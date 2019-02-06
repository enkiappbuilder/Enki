import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Header, Container, Button, Grid, Item, Divider } from 'semantic-ui-react'
import homePage from '../../../public/images/artistTemplate.png'
import comingSoon from '../../../public/images/comingSoon.png'
import { showSideBar } from '../store/sideBar'
import { connect } from 'react-redux'
import { chooseTemplate } from '../store/templateChoice'
import ModalPreview from './PreviewModal'
import copy from '../../functions/fsCopy.js'
import { enableCreate } from "../store/createStatus";
import { toggleEdit } from "../store/sideBar"
import { ipcMain, ipcRenderer } from "electron";
const fs = require('fs-extra')

const artistTemplatePreview =
  [
    require('../../../public/images/artistTemplate.png'),
    require('../../../public/images/artistTemplateMenu.png'),
    require('../../../public/images/artistTemplateAboutMe.png'),
    require('../../../public/images/artistTemplateGallery.png'),
    require('../../../public/images/artistTemplateContact.png'),
  ]
class Templates extends Component {
  constructor(props) {
    super(props)
    this.createTemplate = this.createTemplate.bind(this)
  }

  chooseTemplate(type) {
    this.props.chooseTemplate(type)
  }

  componentDidMount() {
    this.props.showSideBar()
  }

  createTemplate() {
    if (fs.existsSync('./copyOfProject')) {
      alert('Current Project Exists! Redirecting to create Page! To start another project, please delete in creation page!')
      ipcRenderer.send('copyExists')
    } else {
      ipcRenderer.send('show-progressbar')
      this.props.toggleEdit(true)
    }
  }


  render() {

    return (
      <div style={{ maxHeight: '100vh', maxWidth: '100vw', overflow: "scroll" }}>

        <Container style={styles.containerStyle}>
          <Header style={styles.subHeaderStyle}>Choose a template</Header>
          <Divider />

          {/* these containers are buttons to the customize project page, we will need to add functionality to copy the appropriate template when they are pressed*/}
          <Grid columns='1'>
            <Grid.Column>

              <Item.Group>
                <Item>
                  <Item.Image size='small' src={homePage} />
                  <Item.Content style={{ marginTop: 20 }}>
                    <Item.Header>
                      Artists
                  </Item.Header>
                    <Item.Description style={{ flexWrap: 'wrap', width: "85%", paddingBottom: '40px' }}>
                      This template contains a homepage that will display the artist's name and short description, also included in this template are a gallery view, an about me, and a contact page.
                  </Item.Description>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 90, marginTop: 60, width: "85%" }}>
                      <Link to='/create'>
                        <Button onClick={() => this.createTemplate()}>Create Project</Button>
                      </Link>
                      <ModalPreview disabled={false} images={artistTemplatePreview} />
                    </div>
                  </Item.Content>
                </Item>
              </Item.Group>

              <Divider />

              <Item.Group>
                <Item>
                  <Item.Image size='small' src={comingSoon} />
                  <Item.Content style={{ marginTop: 20 }}>
                    <Item.Header>
                      Restaurants
                  </Item.Header>
                    <Item.Description style={{ flexWrap: 'wrap', width: "85%", paddingBottom: '40px' }}>
                      This template contains a homepage that will display the restaurant's name, address, and a short description, also included in this template are menu view, reservations page, and order delivery page.
                  </Item.Description>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 90, marginTop: 60, width: "85%" }}>
                      <Button disabled={true}>Create Project</Button>
                      <ModalPreview disabled={true} images={artistTemplatePreview} />
                    </div>
                  </Item.Content>
                </Item>
              </Item.Group>

              <Divider />

              <Item.Group>
                <Item>
                  <Item.Image size='small' src={comingSoon} />
                  <Item.Content style={{ marginTop: 20 }}>
                    <Item.Header>
                      E-Commerce
                  </Item.Header>
                    <Item.Description style={{ flexWrap: 'wrap', width: "85%", paddingBottom: '40px' }}>
                      This template contains a homepage that will display the stores's name and short description. This template also includes a robust shopping page where you can upload your items, set prices, and allow users to checkout. Users are able to create accounts, view order history, and view
                  </Item.Description>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 90, marginTop: 60, width: "85%" }}>
                      <Button disabled={true}>Create Project</Button>
                      <ModalPreview disabled={true} images={artistTemplatePreview} />
                    </div>
                  </Item.Content>
                </Item>
              </Item.Group>


            </Grid.Column>

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
    enableCreate: () => dispatch(enableCreate()),
    toggleEdit: (bool) => dispatch(toggleEdit(bool))
  }
}

export default connect(null, mapDispatchToProps)(Templates);


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
