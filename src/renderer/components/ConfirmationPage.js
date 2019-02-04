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
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this);
    this.handleExport = this.handleExport.bind(this)
  }


  handleClick() {
  const pageArray = ['../../copyOfProject/screens/AboutScreen.js','../../copyOfProject/screens/ContactScreen.js', '../../copyOfProject/screens/GalleryScreen.js','../../copyOfProject/screens/HomeScreen.js']

    return pageArray.forEach((elem) => updateText(elem, this.props.appDetails))

  }
  handleExport() {
    ipcRenderer.send('exportProject')
  }
  render(){
    console.log('this STATE STATE', this.props.appDetails)
    return (
      <>
      <Header> Final Confirmation</Header>
      <Segment color = 'green'>
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

      <div>
      <Button
          onClick={() => this.handleClick(
            `../../copyOfProject/`,
          )}
        >
          Save To Mobile App
        </Button>
      </div>
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
