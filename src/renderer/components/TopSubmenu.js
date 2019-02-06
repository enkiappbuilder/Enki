import React, { Component } from "react";
import {
  Sidebar,
  Menu,
  Segment,
  Button,
} from "semantic-ui-react";
import { connect } from "react-redux";
// const logo = require(logopath)
import { HashRouter as Router, Link } from "react-router-dom";
import { showMENU, hideMenu } from "../store/subMenu";
import Creation from './Creation'
import { showHome, showAbout, showContact, showGallery, showHelp, showFinal } from "../store/subMenuNav";

import { toggleEdit } from "../store/sideBar"

const fs = require('fs-extra')
const rimraf = require('rimraf')
class SubMenu extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.deleteProject = this.deleteProject.bind(this)
  }

  handleChange() {
    if (!this.props.menuVisible) {
      this.props.showMENU()
    } else {
      this.props.hideMenu()
    }
  }

  deleteProject() {
    try {
      alert('DELETING PROJECT, press ok to start.')
      rimraf.sync('copyOfProject')
      this.props.toggleEdit(false)
      alert('Project has been deleted! Going back to homepage!')
    } catch (err) {
      console.log('DELETE ERROR', err)
    }
  }


  render() {
    return (
      <Sidebar.Pushable
        as={Segment}
        attached="bottom"
        style={{ height: "100vh", flex: "1" }}
      >
        <Sidebar
          as={Menu}
          animation='overlay'
          direction='top'
          visible={true}
          width="thin"
        >
          <Menu.Item onClick={() => this.props.showHelp()}>
            How To Use This App
          </Menu.Item>
          <Menu.Item onClick={() => this.props.showHome()}>
            Home Page
          </Menu.Item>
          <Menu.Item onClick={() => this.props.showGallery()}>
            Gallery
          </Menu.Item>
          <Menu.Item onClick={() => this.props.showAbout()}>
            About
          </Menu.Item>
          <Menu.Item onClick={() => this.props.showContact()}>
            Contact
          </Menu.Item>
          <Menu.Item onClick={() => this.props.showFinal()}>
            <Button color='green'>
              Confirm Your Changes
          </Button>
          </Menu.Item>
          <Menu.Item as={Link} to='/'>
            <Button onClick={() => this.deleteProject()} color='red'> Delete Project </Button>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher basic="true">

          <Router>
            <Creation />
          </Router>

        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

const mapStateToProps = state => {
  return {
    menuVisible: state.subMenu,
    createEnabled: state.createStatus,
    pageView: state.subMenuNav
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showMENU: () => dispatch(showMENU()),
    hideMenu: () => dispatch(hideMenu()),
    showHome: () => dispatch(showHome()),
    showAbout: () => dispatch(showAbout()),
    showContact: () => dispatch(showContact()),
    showGallery: () => dispatch(showGallery()),
    showHelp: () => dispatch(showHelp()),
    showFinal: () => dispatch(showFinal()),
    toggleEdit: (bool) => dispatch(toggleEdit(bool))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubMenu);
