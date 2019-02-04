import React, { Component } from "react";
import EditPage from "./EditPage";
import { Button, Container, Header, Segment } from 'semantic-ui-react'
const { ipcRenderer } = window.require('electron')
import { showSideBar } from '../store/sideBar'
import { connect } from 'react-redux'
import { showMENU, hideMenu } from "../store/subMenu"
import ConfirmationPage from './ConfirmationPage'

// const homeDetails = ['AppName', 'HomeScreenButtonText', 'DescriptionText1', 'LargeWelcomeText']
// const galleryDetails = []
// const aboutDetails = ['AboutMeHeaderText', 'AboutMeImg', 'AboutMeHeader', 'AboutMeDescText', 'AboutMeButtonText']

//new details arrays (staying commented out for now?
const homeDetails =
  ['HomeScreenBackgroundImage',
    'HomeScreenHeaderText',
    'HomeScreenLargeWelcomeText',
    'HomeScreenDescriptionText',
    'HomeScreenButtonText',
    'HomeScreenButtonBackgroundColor',
    'HomeScreenLargeWelcomeColor',
    'HomeScreenDescriptionColor'
  ]
const galleryDetails =
  ['GalleryHeaderText', 'GalleryTitleText1', 'GalleryDescriptionText1', 'GalleryImage1Path', 'GalleryTitleText2', 'GalleryDescriptionText2', 'GalleryImage2Path', 'GalleryTitleText3', 'GalleryDescriptionText3', 'GalleryImage3Path', 'GalleryTitleText4', 'GalleryDescriptionText4', 'GalleryImage4Path', 'GalleryTitleText5', 'GalleryDescriptionText5', 'GalleryImage5Path', 'GalleryBackgroundColor', 'GalleryPhotoTitleColor', 'GalleryPhotoDescriptionColor'
  ]

const aboutDetails =
  ['AboutMeHeaderText',
    'AboutMeImage',
    'AboutMeTitleText',
    'AboutMeDescText',
    'AboutMeButtonText',
    'AboutMeButtonBackgroundColor',
    'AboutMeBackGroundColor',
    'AboutMeBorderColor',
    'AboutMeDescBackgroundColor',
    'AboutMeTitleColor',
    'AboutMeDescColor'
  ]
const contactDetails = [
  'ContactScreenHeaderText',
  'ContactScreenInstagramURLText',
  'ContactScreenTwitterURLText',
  'ContactScreenFacebookURLText',
  'ContactScreenMainText',
  'FormMessageText',
  'ContactScreenSubmitButtonBackgroundColor',
  'ContactScreenBackgroundColor'
]



class CreatePage extends Component {
  constructor() {
    super()
    this.handleUpload = this.handleUpload.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.showSideBar()
  }

  handleChange() {
    if (!this.props.menuVisible) {
      this.props.showMENU()
    } else {
      this.props.hideMenu()
    }
  }

  handleUpload(fileName, location) {

    ipcRenderer.send('uploadPhoto', fileName, location)
  }
  render() {
    const { pageView } = this.props
    return (
      <div style={{ maxHeight: '100vh', maxWidth: '100vw', overflow: "scroll" }}>
        <Button color='green' onClick={() => this.handleChange()}>Start Customizing!</Button>
        {
          (pageView === 'home' && <EditPage page='Home' details={homeDetails} />)
        }
        {
          (pageView === 'gallery' && <EditPage page='Gallery' details={galleryDetails} />)
        }
        {
          (pageView === 'about' && <EditPage page='About' details={aboutDetails} />)
        }
        {
          (pageView === 'contact' && <EditPage page='Contact' details={contactDetails} />)
        }
        {
          (pageView === 'final' && <ConfirmationPage />)
        }
        {
          (pageView === 'help' && <><Header>UNDER CONSTRUCTION</Header><Segment color='red'><h1>UNDER CONSTRUCTION</h1></Segment></>)
        }

      </div>
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
    showSideBar: () => dispatch(showSideBar()),
    showMENU: () => dispatch(showMENU()),
    hideMenu: () => dispatch(hideMenu())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);
