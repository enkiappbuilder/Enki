import React, { Component } from "react";

import { Form, Header, Divider, Segment, Button, Card, Grid} from "semantic-ui-react";

class EditPage extends Component {
  render() {
    return (
      <>
        <Header> Edit Your Mobile App </Header>
        <Segment>
          <Grid columns={2} relaxed="very" celled='internally'>
            <Grid.Column>
              <Form>FORMS GO HERE</Form>
            </Grid.Column>

            <Grid.Column>
              <Card>
                RENDERING GOES HERE
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