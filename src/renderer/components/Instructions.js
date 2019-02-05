import React from "react";
import {
  Container,
  Image,
  Button,
  Menu,
  Header,
  Segment,
  List
} from "semantic-ui-react";
import afterChange from './image/afterChange.png'
import beforeChange from './image/beforeChange.png'
import beforeColor from './image/beforeColor.png'
import afterColor from './image/afterColor.png'

class Instructions extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <>
      <Header>Instructions</Header>
      <Segment color = 'green'>
        <Header>Each of the different sections allows you to change specific parts of your mobile app!</Header>
        <List
        bulleted
        size = 'small'
        >
          <List.Item>You are able to change the text in certain pages of your app</List.Item>
            <Segment style = {styles.segmentContainer}>
              <Image src = {beforeChange}/>
              <Image src = {afterChange}/>
            </Segment>
          <List.Item> You can spice up your texts or background with color.</List.Item>
          <Segment style = {styles.segmentContainer}>
              <Image src ={beforeColor}/>
              <Image src ={afterColor}/>
            </Segment>
          <List.Item>Upload a new photo to your gallery!</List.Item>
          <Segment>
              Test
            </Segment>
          <List.Item>...or your background image!</List.Item>
          <Segment>
              Test
            </Segment>
          <List.Item>If you don't like your project, you can delete your current project with the Delete Project button</List.Item>
          <Segment>
              <Button color = 'red'> Delete Project</Button>
            </Segment>
          <List.Item>Otherwise, head over to confirm your changes and do a final submission.</List.Item>
          <Segment>
              <Button color ='green'> Confirm Your changes</Button>
          </Segment>
          <List.Item>Export your files after!</List.Item>
          <Segment>
              Test
            </Segment>
        </List>
      </Segment>
      </>
    )
  }
}

export default Instructions

const styles = {
  segmentContainer: {
    display: 'flex'
  }
}
