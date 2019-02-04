import React from 'react'
import { Container, Button, Form, Menu, Image } from 'semantic-ui-react'
import { SocialIcon } from 'react-social-icons'

const GalleryPreview = (props) => {
  const { appDetails } = props;
  console.log('props', props)
  return (
    <Container style={{
      flex: 1,
      color: '#fff',
      backgroundColor: '#000000',
      alignItems: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }}>

      <Menu
        secondary
        style={{ color: '#132029', backgroundColor: 'rgba(250,249,249,0.8)' }}
      >
        <Menu.Item position='left' icon='sidebar' />
        <Menu.Item >{appDetails.ContactScreenHeaderText || 'Header Text'}</Menu.Item>
        <Menu.Item position='right' icon='home' />
      </Menu>

      <Container style={{ textAlign: 'center' }}>
        <Image />
      </Container>



    </Container>

  )
}

const styles = {
  homePageButton: {
    backgroundColor: 'rgba(250,249,249,0.3)',
    marginTop: 15,
    marginBottom: 15
  },
  homePageFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homePageHeader: {
    fontSize: 35,
    textAlign: 'center',
    margin: 0,
    color: '#FFFFFF',
    width: 'auto',
    overflowWrap: 'break-word'
  },
  homePageSubHeader: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  header: {
    top: 0
  },
  container: {
    flex: 1,
    color: '#fff',
    backgroundSize: 'cover',
    overflow: 'hidden',
    width: '100%',
    height: '100vh',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }
};

export default GalleryPreview
