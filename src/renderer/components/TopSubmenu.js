import React, { Component } from "react";
import path from "path";
import {
  Sidebar,
  Menu,
  Segment,
  Header,
  Icon,
  Image,
  Button,
} from "semantic-ui-react";
import logopath from "../../../static/logo.png";
import { connect } from "react-redux";
// const logo = require(logopath)
import { HashRouter as Router, Link } from "react-router-dom";
import { showMENU, hideMenu } from "../store/subMenu";
import Creation from './Creation'
import { showHome, showAbout, showContact, showGallery, showHelp } from "../store/subMenuNav";


class SubMenu extends Component {
  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange () {
    if(!this.props.menuVisible){
      this.props.showMENU()
    } else {
      this.props.hideMenu()
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
          animation= 'overlay'
          direction = 'top'
          visible={this.props.menuVisible}
          width="thin"
        >
          <Menu.Item >
            Home Page
          </Menu.Item>
          <Menu.Item >
            Gallery
          </Menu.Item>
          <Menu.Item >
            About
          </Menu.Item>
          <Menu.Item >
            Contact
          </Menu.Item>
          <Menu.Item >
            Need help?
          </Menu.Item>
          <Menu.Item >
            <Button onClick={()=>this.handleChange()} color = 'green'> Hide Menu</Button>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher basic="true">

            <Router>
              <Creation/>
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
    showHelp: () => dispatch(showHelp())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubMenu);
