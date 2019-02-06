import React, { Component } from "react";
const { ipcRenderer } = require('electron')
import {
  Header,
  Segment,
  Card,
  Grid,
  Sticky
} from "semantic-ui-react";
import Forms from "./Forms";
import UploadImage from "./UploadImageFormButton"
import ColorPicker from "./ColorPicker"
import { connect } from 'react-redux'
import { saveAppDetails } from '../store/appDetails'
import HomePreview from "./MobileHomepageView";
import AboutPreview from "./MobileAboutMeView";
import ContactPreview from "./MobileContactMeView"
import GalleryPreview from "./MobileGalleryView";

class EditPage extends Component {
  constructor(props) {
    super(props);
    this.state = Object.keys(this.props.appDetails).filter(detail => this.props.details.includes(detail)).reduce((newState, detail) => { newState[detail] = this.props.appDetails[detail]; return newState }, {})
    this.handleUpload = this.handleUpload.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this)
  }

  componentDidMount() {
    ipcRenderer.on('photo-response', (event, photoPath, commentName) => {
      this.setState({
        [commentName]: photoPath
      })
    })
  }

  handleUpload(commentName) {
    ipcRenderer.send('uploadPhoto', commentName)
  }
  componentWillUnmount() {
    this.props.saveAppDetails(this.state)
  }
  handleChange(event, { value, name }) {
    this.setState({ [name]: value });
  }

  handleColorChange(commentName, color) {
    this.props.saveAppDetails({ [commentName]: color })
    this.setState({ [commentName]: color })
  }


  render() {
    let Preview
    if (this.props.page === 'Home') Preview = <HomePreview appDetails={this.state} />
    if (this.props.page === 'About') Preview = <AboutPreview appDetails={this.state} />
    if (this.props.page === 'Contact') Preview = <ContactPreview appDetails={this.state} />
    if (this.props.page === 'Gallery') Preview = <GalleryPreview appDetails={this.state} />

    const stateArray = Object.keys(this.state)

    return (
      <>
        <Header style={styles.headerStyles}> Edit Your {this.props.page} Page </Header>
        <Segment color='green'>
          <Grid columns={2} relaxed="very" celled="internally">
            <Grid.Column>

              {stateArray.filter(field => this.props.details.includes(field)).map((field, i) => {

                if (field.includes('Text')) {

                  return (
                    <Forms
                      handleChange={this.handleChange}
                      upState={this.state}
                      name={field}
                      value={this.state[field]}
                      key={field}
                    />
                  )
                }

                if (field.includes('Image')) {
                  return (
                    <UploadImage
                      name={field}
                      handleUpload={this.handleUpload}
                      key={field}
                    />

                  )
                }

                if (field.includes('Color')) {
                  return (
                    <ColorPicker
                      upState={this.state}
                      name={field}
                      handleColorChange={this.handleColorChange}
                      key={field}
                    />
                  )
                }

              })}
            </Grid.Column>
            <Grid.Column>

              <Sticky>
                <Card style={{ height: '70vh', display: 'flex', marginTop: '50px' }}>

                  {Preview}
                </Card>
              </Sticky>
            </Grid.Column>
          </Grid>
        </Segment>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    appDetails: state.appDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveAppDetails: (details) => dispatch(saveAppDetails(details))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);

const styles = {
  headerStyles: {
    paddingLeft: '42px'
  }
}
