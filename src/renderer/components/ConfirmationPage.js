import React, { Component } from "react";
import { Button, Segment, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateText } from "../../functions/rewrite";
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

  handleClick(file) {
    return () => updateText(file, this.props.appDetails);
  }
  handleExport() {
    ipcRenderer.send('exportProject')
  }
  render(){
    console.log('this STATE STATE', this.state)
    return (
      <>
      <Header> Final Confirmation</Header>
      <Segment color = 'green'>
      <Coverflow
      height ='300'
      displayQuantityOfSide={2}
      navigation
      infiniteScroll
      enableHeading
      >
        <img src = "https://cloud.fullstackacademy.com/Corey.jpg?mtime=20170626111607"></img>
        <img src = "https://cloud.fullstackacademy.com/Corey.jpg?mtime=20170626111607"></img>
        <img src = "https://cloud.fullstackacademy.com/Corey.jpg?mtime=20170626111607"></img>
      </Coverflow>
      <div></div>

      <button onClick={this.handleExport}>export files, yeah!</button>
      <Button
          onClick={this.handleClick(
            `../../copyOfProject/`,
          )}
        >
          Save To Mobile App
        </Button>
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
