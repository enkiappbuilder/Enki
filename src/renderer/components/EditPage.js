import React, { Component } from "react";

import { Form, Header, Divider, Segment, Button, Card, Grid, Image} from "semantic-ui-react";
import Forms from "./TextForm";
import phone from './phone.png'

class EditPage extends Component {
  constructor(){
    super()
    this.state = {
      AppName :'',
      TitleText1 : '',
      DescriptionText1 : '',
      WelcomeText : '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event, {value, name}) { 
    this.setState({[name]: value})
    // console.log('this.state.appName:', this.state.appName);
}

  render() {
    return (
      <>
        <Header> Edit Your Mobile App </Header>
        <Segment>
          <Grid columns={2} relaxed="very" celled='internally'>
            <Grid.Column>
              <Forms handleChange={this.handleChange} state={this.state} name='AppName'/>
              <Forms handleChange={this.handleChange} state={this.state} name='TitleText1'/>
              <Forms handleChange={this.handleChange} state={this.state} name='DescriptionText1'/>
              <Forms handleChange={this.handleChange} state={this.state} name='WelcomeText'/>

            </Grid.Column>
            

            <Grid.Column>
              <Card>
                <Header textAlign='center'> {this.state.AppName}</Header>
                <Image src={phone}/>
                <Card.Content>
                  <Card.Header>{this.state.TitleText1}</Card.Header>
                  <Card.Meta>{this.state.DescriptionText1}</Card.Meta>
                  <Card.Description>{this.state.WelcomeText}</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>

          {/* <Divider vertical/> */}
        </Segment>
      </>
    );
  }
}

export default EditPage