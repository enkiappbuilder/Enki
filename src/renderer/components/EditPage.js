import React, { Component } from "react";

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
class EditPage extends Component {
  constructor() {
    super();
    this.state = {
      AppName: "",
      TitleText1: "",
      DescriptionText1: "",
      WelcomeText: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event, { value, name }) {
    this.setState({ [name]: value });
  }

  handleClick(file, location, text) {
    return () => updateText(file, this.state);
  }

  render() {
    return (
      <>
        <Header> Edit Your Mobile App </Header>
        <Segment>
          <Grid columns={2} relaxed="very" celled="internally">
            <Grid.Column>
              <Forms
                handleChange={this.handleChange}
                state={this.state}
                name="AppName"
              />
              <Forms
                handleChange={this.handleChange}
                state={this.state}
                name="TitleText1"
              />
              <Forms
                handleChange={this.handleChange}
                state={this.state}
                name="DescriptionText1"
              />
              <Forms
                handleChange={this.handleChange}
                state={this.state}
                name="WelcomeText"
              />
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
            "../../copyOfProject/screens/HomeScreen.js",
            "AppName",
            "changedsafasfasafa things"
          )}
        >
          Save To Mobile App
        </Button>
      </>
    );
  }
}

export default EditPage;
