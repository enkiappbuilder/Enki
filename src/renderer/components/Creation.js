import React, { Component } from "react";
import EditPage from "./EditPage";
import Instructions from './Instructions'
import { Button, Container, Header, Segment } from 'semantic-ui-react'
const { ipcRenderer } = window.require('electron')
import { showSideBar } from '../store/sideBar'
import { connect } from 'react-redux'
import { showMENU, hideMenu } from "../store/subMenu"
import ConfirmationPage from './ConfirmationPage'
import fs from 'fs-extra'
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
    this.state = {
      copying: false,
    }
  }

  componentDidMount() {
    this.props.showSideBar()
    if (!fs.existsSync('./copyOfProject')) this.setState({copying:true})
    ipcRenderer.on('copy-done', ()=> {
      this.setState({copying:false})
    })
    ipcRenderer.on('copying', ()=>{
      this.setState({copying:true})
    })
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
    
    if(this.state.copying) return (<Header style={{ margin:'30vh'}}>Please Wait For Your Files To Finish Writing</Header> )
    
    return (
      
      <div style={{ maxHeight: '100vh', maxWidth: '100vw', overflow: "scroll" }}>
        <Button color='green' onClick={() => this.handleChange()}>Start Customizing!</Button>
        {
        (pageView === 'help' && <Instructions/>)
        }
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
