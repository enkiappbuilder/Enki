import React, { Component } from "react";
const { ipcRenderer } = require('electron')
import {
  Form,
  Header,
  Divider,
  Segment,
  Button,
  Card,
  Grid,
  Image
} from "semantic-ui-react";
import Forms from "./Forms";
import UploadImage from "./UploadImageFormButton"
import ColorPicker from "./ColorPicker"
import phone from "./phone.png";
import { updateText } from "../../functions/rewrite";
import { connect } from 'react-redux'
import { saveAppDetails } from '../store/appDetails'
import HomePreview from "./MobileHomepageView";
import AboutPreview from "./MobileAboutMeView";
import ContactPreview from "./MobileContactMeView"

class EditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.appDetails
    };
    this.handleUpload = this.handleUpload.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleChange(event, { value, name }) {
    this.props.saveAppDetails({ [name]: value })
    this.setState({ [name]: value });
  }

  handleClick(file) {
    return () => updateText(file, this.state);
  }

  handleColorChange(commentName, color) {
    this.props.saveAppDetails({ [commentName]: color })
    this.setState({ [commentName]: color })
  }


  render() {
    let Preview
    if (this.props.page === 'Home') Preview = <HomePreview />
    if (this.props.page === 'About') Preview = <AboutPreview />
    if (this.props.page === 'Contact') Preview = <ContactPreview />

    return (
      <>
        <Header> Edit Your {this.props.page} Page </Header>
        <Segment>
          <Grid columns={2} relaxed="very" celled="internally">
            <Grid.Column>

              {Object.keys(this.state).filter(field => this.props.details.includes(field)).map(field => {

                if (field.includes('Text')) {
                  return (
                    <Forms
                      handleChange={this.handleChange}
                      upState={this.state}
                      name={field}
                      value={this.state[field]}
                    />
                  )
                }

                if (field.includes('Image')) {
                  return (
                    <UploadImage
                      name={field}
                      handleUpload={this.handleUpload} />
                  )
                }

                if (field.includes('Color')) {
                  return (
                    <ColorPicker
                      name={field}
                      handleColorChange={this.handleColorChange}
                    />
                  )
                }

              })}
            </Grid.Column>

            <Grid.Column>
              {/* <Card>
                <Header textAlign="center"> {this.state.AppName}</Header>
                <Image src={phone} />
                <Card.Content>
                  <Card.Header>{this.state.TitleText1}</Card.Header>
                  <Card.Meta>{this.state.DescriptionText1}</Card.Meta>
                  <Card.Description>{this.state.WelcomeText}</Card.Description>
                </Card.Content>
              </Card> */}

              <Card style={{ height: '60vh', display: 'flex' }}>
                {Preview}

              </Card>


            </Grid.Column>
          </Grid>


        </Segment>

        <Button
          onClick={this.handleClick(
            `../../copyOfProject/screens/${this.props.page}Screen.js`,
          )}
        >
          Save To Mobile App
        </Button>
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
