import React, { Component } from "react";
import EditPage from "./EditPage";
const { ipcRenderer } = window.require('electron')
import { showSideBar } from '../store/sideBar'
import { connect } from 'react-redux'

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
    this.handleExport = this.handleExport.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
  }

  componentDidMount() {
    this.props.showSideBar()
  }

  handleExport() {
    ipcRenderer.send('exportProject')
  }
  handleUpload(fileName, location) {

    ipcRenderer.send('uploadPhoto', fileName, location)
  }
  render() {
    return (
      <div style={{ maxHeight: '100vh', maxWidth: '100vw', overflow: "scroll" }}>
        <h1> HERE IS WHERE YOU'LL CUSTOMIZE YOUR APP! </h1>
        <EditPage page='Home' details={homeDetails} />
        <EditPage page='Gallery' details={galleryDetails} />
        <EditPage page='About' details={aboutDetails} />
        <EditPage page='Contact' details={contactDetails} />

        <button onClick={() => this.handleUpload("screens/HomeScreen.js", 'ImagePath')}>Click to upload Photo
              </button>
        <button onClick={this.handleExport}>export files, yeah!</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showSideBar: () => dispatch(showSideBar()),
  }
}

export default connect(null, mapDispatchToProps)(CreatePage);
