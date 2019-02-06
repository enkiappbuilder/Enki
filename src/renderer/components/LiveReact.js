import React, { Component } from "react";
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
      currentPage: "Home"
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage = 'Home') {
    this.setState({
      currentPage: newPage
    });
  }
  render() {
    const { currentPage } = this.state;
    let mobileComponent
    if (currentPage === 'Home') mobileComponent = <HomePreview changePage={(newPage) => this.changePage(newPage)} appDetails={this.props.appDetails} />
    if (currentPage === 'About') mobileComponent = <AboutPreview changePage={(newPage) => this.changePage(newPage)} appDetails={this.props.appDetails} />
    if (currentPage === 'Contact') mobileComponent = <ContactPreview changePage={(newPage) => this.changePage(newPage)} appDetails={this.props.appDetails} />
    if (currentPage === 'Gallery') mobileComponent = <GalleryPreview changePage={(newPage) => this.changePage(newPage)} appDetails={this.props.appDetails} />

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
