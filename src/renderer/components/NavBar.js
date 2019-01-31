import React, { Component } from "react";
import path from "path";
import {
  Sidebar,
  Menu,
  Segment,
  Header,
  Icon,
  Image,
} from "semantic-ui-react";
import logopath from "../../../static/logo.png";
import { connect } from "react-redux";
// const logo = require(logopath)
import { HashRouter as Router, Link } from "react-router-dom";
import Routes from "../routes";
class SideBar extends Component {
  render() {
    return (
      <Sidebar.Pushable
        as={Segment}
        attached="bottom"
        style={{ height: "100vh", flex: "1" }}
      >
        <Sidebar
          as={Menu}
          animation="slide along"
          vertical
          visible={this.props.menuVisible}
          width="thin"
        >
          <Menu.Item as={Link} to="/">
            <Image src={logopath} />
          </Menu.Item>


          <Menu.Item as={Link} to='/templates'> Templates </Menu.Item>
          <Menu.Item as={Link} to='/create'> Create </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher basic="true">

            <Router>
              <Routes />
            </Router>

        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

const mapStateToProps = state => {
  return {
    menuVisible: state.sideBar
  };
};

export default connect(mapStateToProps)(SideBar);
