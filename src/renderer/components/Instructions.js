import React from "react";
import {
  Container,
  Image,
  Button,
  Menu,
  Header,
  Segment,
  List,
  Text
} from "semantic-ui-react";
import afterChange from './image/afterChange.png'
import beforeChange from './image/beforeChange.png'
import beforeColor from './image/beforeColor.png'
import afterColor from './image/afterColor.png'
import afterBackground from './image/afterBackground.png'
import beforeGallery from './image/beforeGallery.png'
import afterGallery from './image/afterGallery.png'
class Instructions extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Header style={{ marginLeft: 20 }}>Instructions</Header>
        <Segment color='green'>
          <div style={{ marginRight: 150, fontWeight: 'bold' }}> The menu above allows you to navigate to each screen in your app, click on Home Page to start customizing your home page screen or read below for examples of how you can customize your app.</div>
          <List
            bulleted
            size='small'
          >
            <List.Item>You can change the text on each screen of your app.</List.Item>
            <Segment style={styles.segmentContainer}>
              <Image src={beforeChange} />
              <Image src={afterChange} />
            </Segment>
            <List.Item> You can spice up your texts or background with color.</List.Item>
            <Segment style={styles.segmentContainer}>
              <Image src={beforeColor} />
              <Image src={afterColor} />
            </Segment>
            <List.Item>Upload a new photo to your gallery!</List.Item>
            <Segment style={styles.segmentContainer}>
              <Image src={beforeGallery} />
              <Image src={afterGallery} />
            </Segment>
            <List.Item>...or your background image!</List.Item>
            <Segment style={styles.segmentContainer}>
              <Image src={beforeChange} />
              <Image src={afterBackground} />
            </Segment>
            <List.Item>If you don't like your project, you can delete your current project with the Delete Project button</List.Item>
            <Segment style={styles.segmentContainer}>
              <Button disabled={true} color='red'> Delete Project</Button>
            </Segment>
            <List.Item>Otherwise, head over to confirm your changes and do a final submission.</List.Item>
            <Segment style={styles.segmentContainer}>
              <Button disabled={true} color='green'> Confirm Your changes</Button>
            </Segment>
            <List.Item>When you've finished customizing your app, export your files!</List.Item>
            <Segment style={styles.segmentContainer}>
              <Button disabled={true} >Export Project</Button>
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
    display: 'flex',
    width: '1000px'
  }
}
