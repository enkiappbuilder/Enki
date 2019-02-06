import React, { Component } from "react";
import { Button, Segment, Header, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateText } from "../../functions/rewrite";
import { saveAppDetails } from "../store/appDetails";
import LiveReact from "./LiveReact";
import { ipcRenderer } from 'electron'


class ConfirmationPage extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleExport = this.handleExport.bind(this);
    this.newPath = this.newPath.bind(this);
  }

  componentDidMount() {
    const pageArray = [
      "../../copyOfProject/screens/AboutScreen.js",
      "../../copyOfProject/screens/ContactScreen.js",
      "../../copyOfProject/screens/GalleryScreen.js",
      "../../copyOfProject/screens/HomeScreen.js"
    ];
    return pageArray.forEach(elem => updateText(elem, this.props.appDetails));
  }
  newPath() {
    this.setState({
      currentPage: this.state.currentPage + 1
    });
    console.log("this.state:", this.state);
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
    console.log('this.props.appDetails:', this.props.appDetails);
    return (
      <>
        <Header style={{ marginLeft: 50 }}> Final Confirmation</Header>
        <Segment style={{ width: '90%' }} color='green' >
          <Container style={{
            display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', padding: 0

          }}>
            <div style={{ margin: 50, flex: 1, textAlign: 'center' }}>View your mobile app and see if you'd like to make any changes. When you're ready, click export project to receive your project files!</div>
            <LiveReact style={{ flex: 1, margin: 20 }} newPath={this.newPath
            } />
            <div style={{ display: 'flex', justifyContent: 'center', flex: 1, margin: 20 }}>
              <Button onClick={this.handleExport}>Export Project</Button>
            </div>
          </Container>
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
