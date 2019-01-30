import React, { Component } from "react";
import path from "path";
import { Sidebar, Menu, Segment, Header, Icon, Image } from "semantic-ui-react";
import logopath from "/Users/milleniumfalcon/Documents/FullStack/CapStone/Enki/static/logo.png";
import { connect } from "react-redux";
// const logo = require(logopath)
import { HashRouter as Router } from "react-router-dom";
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
          <Image src={logopath} />
          <Menu.Item> HI I AM ITEM </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher basic>
          <Segment>
            <Router>
              <Routes />
            </Router>
          </Segment>
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
