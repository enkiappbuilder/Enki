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
import phone from "./phone.png";
import { updateText } from "../../functions/rewrite";
import {connect} from 'react-redux'
import {saveAppDetails} from '../store/appDetails'

class EditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.appDetails
    };
    // this.handleUpload = this.handleUpload.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  // handleUpload(fileName, location) {
  //   ipcRenderer.send('uploadPhoto', fileName, location)
  // }

  handleChange(event, { value, name }) {
    this.setState({ [name]: value });
    this.props.saveAppDetails(this.state)
  }

  handleClick(file, location, text) {
    return () => updateText(file, this.state);
  }

  render() {
    return (
      <>
        <Header> Edit Your {this.props.page} Page </Header>
        <Segment>
          <Grid columns={2} relaxed="very" celled="internally">
            <Grid.Column>
              {Object.keys(this.state).filter(field => this.props.details.includes(field)).map(field => {
                return (
                  <Forms
                handleChange={this.handleChange}
                upState={this.state}
                name={field}
                value={this.state[field]}
              />
                )
              })}
            </Grid.Column>

            <Grid.Column>
              <Card>
                <Header textAlign="center"> {this.state.AppName}</Header>
                <Image src={phone} />
                <Card.Content>
                  <Card.Header>{this.state.TitleText1}</Card.Header>
                  <Card.Meta>{this.state.DescriptionText1}</Card.Meta>
                  <Card.Description>{this.state.WelcomeText}</Card.Description>
                </Card.Content>
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
    saveAppDetails : (details) => dispatch(saveAppDetails(details))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
