import React, { Component } from "react";
import {Card, Sidebar, Menu} from 'semantic-ui-react'
import { Route, Switch } from "react-router-dom";
import HomePreview from "./MobileHomepageView";
import GalleryPreview from "./MobileGalleryView";
import AboutPreview from "./MobileAboutMeView";
import ContactPreview from "./MobileContactMeView";
import { connect } from "react-redux";

class LiveReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Home",
      visible: false
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage='Home') {
    this.setState({
      currentPage: newPage
    });
  }
  render() {
    const { visible } = this.state
    const { currentPage } = this.state;
    let mobileComponent
    if(currentPage === 'Home') mobileComponent =
      <Card style={{ height: '70vh', display: 'flex', marginTop: '50px' }}>
        <Sidebar.Pushable style={{ height: '70vh', display: 'flex', }}>
          <Sidebar
          as = {Menu}
          animation = 'overlay'
          vertical
          visible = {visible}
          width = 'thin'
          >
          <Menu.Item onClick = {()=>this.changePage('Home')}>
            Home
          </Menu.Item>
          <Menu.Item onClick = {()=>this.changePage('Gallery')}>
            Gallery
          </Menu.Item>
          <Menu.Item onClick = {()=>this.changePage('About')}>
            About
          </Menu.Item>
          <Menu.Item onClick = {()=>this.changePage('Contact')}>
            Contact
          </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
             <HomePreview changePage={(newPage)=>this.changePage(newPage)}appDetails={this.props.appDetails}/>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Card>
      if(currentPage === 'About') mobileComponent =
      <Card style={{ height: '70vh', display: 'flex', marginTop: '50px' }}>
      <AboutPreview changePage={(newPage)=>this.changePage(newPage)}appDetails={this.props.appDetails}/>
    </Card>
    if(currentPage === 'Contact') mobileComponent =
    <Card style={{ height: '70vh', display: 'flex', marginTop: '50px' }}>
    <ContactPreview changePage={(newPage)=>this.changePage(newPage)}appDetails={this.props.appDetails}/>
    </Card>
    if(currentPage === 'Gallery') mobileComponent =
    <Card style={{ height: '70vh', display: 'flex', marginTop: '50px' }}>
    <GalleryPreview changePage={(newPage)=>this.changePage(newPage)}appDetails={this.props.appDetails}/>
    </Card>

    return (
      <div>

        {mobileComponent}

      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    appDetails: state.appDetails
  };
};

export default connect(mapStateToProps)(LiveReact);
