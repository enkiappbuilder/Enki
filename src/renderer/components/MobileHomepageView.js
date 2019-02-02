import React from 'react'
import { connect } from 'react-redux'
import { Container, Image, Button, Text, Header, Form, Menu, Item } from 'semantic-ui-react'
import myImg from '../../../copyOfProject/assets/images/sampleImages/ice.jpg'


const HomePreview = (props) => {
  const { appDetails } = props;
  return (
    <Container style={{
      // display:'flex',
      flex: 1,
      color: '#fff',
      backgroundImage: `url(${myImg})`,
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
        <Menu.Item >{appDetails.HomeScreenHeaderText || 'Header Text'}</Menu.Item>
        <Menu.Item position='right' icon='home' />
      </Menu>

      <Container style={{ textAlign: 'center' }}>
        <p style={styles.homePageHeader}>{/*LargeWelcomeText*/}{appDetails.HomeScreenLargeWelcomeText || 'Welcome Text'}{/*LargeWelcomeText*/}</p>
        <p style={styles.homePageSubHeader}>{/*DescriptionText1*/}{appDetails.HomeScreenDescriptionText || 'Photographer and designer.'}{/*DescriptionText1*/}</p>
        <Button
          // onPress={() => this.props.navigation.navigate('About')}
          content= /*HomescreenButtonText*/ {appDetails.HomeScreenButtonText || 'About Me'} /*HomescreenButtonText*/
          inverted
          style={styles.homePageButton}
        />
      </Container>



    </Container>

  )
}

const styles = {
  homePageButton: {
    backgroundColor: /*HomeScreenButtonBackgroundColor*/ 'rgba(250,249,249,0.3)' /*HomeScreenButtonBackgroundColor*/
  },
  homePageFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homePageHeader: {
    fontSize: 49,
    textAlign: 'center',
    color: /*HomeScreenHeaderColor*/'#FFFFFF' /* HomeScreenHeaderColor*/
  },
  homePageSubHeader: {
    fontSize: 20,
    textAlign: 'center',
    color: /*HomeScreenSubHeaderColor*/ '#FFFFFF' /*HomeScreenSubHeaderColor*/
  },
  header: {
    top: 0
  },
  container: {
    flex: 1,
    color: '#fff',
    // backgroundImage: myImg,
    // backgroundSize:'cover',
    overflow: 'hidden',
    width: '100%',
    height: '100vh',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }
};

export default HomePreview
