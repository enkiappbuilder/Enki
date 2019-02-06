import React, { Component } from "react";
import { Button, Segment, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateText } from "../../functions/rewrite";
import { saveAppDetails } from "../store/appDetails";
import HomePreview from "./MobileHomepageView";
import AboutPreview from "./MobileAboutMeView";
import ContactPreview from "./MobileContactMeView";
import Coverflow from "react-coverflow";
import LiveReact from "./LiveReact";
import {HashRouter as Router} from 'react-router-dom'

class ConfirmationPage extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleExport = this.handleExport.bind(this);
    this.newPath = this.newPath.bind(this)
  }

  newPath(){
    this.setState({
      currentPage : this.state.currentPage + 1
    })
    console.log('this.state:', this.state);
  }

  handleClick() {
    const pageArray = [
      "../../copyOfProject/screens/AboutScreen.js",
      "../../copyOfProject/screens/ContactScreen.js",
      "../../copyOfProject/screens/GalleryScreen.js",
      "../../copyOfProject/screens/HomeScreen.js"
    ];

    return pageArray.forEach(elem => updateText(elem, this.props.appDetails));
  }
  handleExport() {
    ipcRenderer.send("exportProject");
  }
  render() {
    return (
      <>
        <Header> Final Confirmation</Header>
        <Segment color="green">
          <Router>
            <LiveReact newPath={this.newPath}/>
          </Router>

          <div>
            <Button onClick={() => this.handleClick()}>
              Save To Mobile App
            </Button>
          </div>
          <button onClick={this.handleExport}>export files, yeah!</button>
        </Segment>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    appDetails: state.appDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveAppDetails: details => dispatch(saveAppDetails(details))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationPage);
