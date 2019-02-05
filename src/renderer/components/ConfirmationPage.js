import React, { Component } from "react";
import { Button, Segment, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateText } from "../../functions/rewrite";
import { saveAppDetails } from '../store/appDetails'
import HomePreview from "./MobileHomepageView";
import AboutPreview from "./MobileAboutMeView";
import ContactPreview from "./MobileContactMeView"
import Coverflow from 'react-coverflow'



class ConfirmationPage extends Component {
  constructor() {
    super()
    this.handleExport = this.handleExport.bind(this)
  }

  componentDidMount() {
    const pageArray = ['../../copyOfProject/screens/AboutScreen.js', '../../copyOfProject/screens/ContactScreen.js', '../../copyOfProject/screens/GalleryScreen.js', '../../copyOfProject/screens/HomeScreen.js']
    return pageArray.forEach((elem) => updateText(elem, this.props.appDetails))
  }

  handleExport() {
    ipcRenderer.send('exportProject')
  }
  render() {
    return (
      <>
        <Header> Final Confirmation</Header>
        <Segment color='green'>
          {/* <Coverflow
      height ='300'
      displayQuantityOfSide={2}
      navigation
      infiniteScroll
      enableHeading
      >
        <img src = "https://cloud.fullstackacademy.com/Corey.jpg?mtime=20170626111607"></img>
        <img src = "https://cloud.fullstackacademy.com/Corey.jpg?mtime=20170626111607"></img>
        <img src = "https://cloud.fullstackacademy.com/Corey.jpg?mtime=20170626111607"></img>
      </Coverflow> */}

          <button onClick={this.handleExport}>export files, yeah!</button>
        </Segment>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    appDetails: state.appDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveAppDetails: (details) => dispatch(saveAppDetails(details))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationPage);
