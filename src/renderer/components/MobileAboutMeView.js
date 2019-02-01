import React from 'react'
import {Container, Image, Button, Text, Header, Form, Menu, Item} from 'semantic-ui-react'


const AboutPreview = () => {
  return(
    <Container style={{alignItems:'center',
    flex: 1,
    color: '#fff',
    alignItems:'center',
    backgroundColor: /*AboutMeBackgroundColor*/ '#0e0f0f' /*AboutMeBackgroundColor*/,

    }}>
      <Menu
        secondary
        style= {{ color: '#132029', backgroundColor:'rgba(250,249,249,0.8)' }} 
      >
        <Menu.Item position='left' icon='sidebar'/>
        <Menu.Item >Joe Hu</Menu.Item>
        <Menu.Item position='right' icon='home'/>
      </Menu>
    <Container style={styles.flex}>
      <Image
        style={{objectFit:'cover'}}
        src={ /*AboutMeImg*/ "https://cloud.fullstackacademy.com/Corey.jpg?mtime=20170626111607" /*AboutMeImg*/ }
        size="contain"
        borderRadius={20}
      />
      <Container style={{textAlign:'center'}}>
        <p style={styles.aboutMeHeader}>
          {/*AboutMeHeader*/} About Me {/*AboutMeHeader*/}
        </p>
        <p style={styles.text}>
          {/*AboutMeDescText*/}This is just some filler lorem ipsum, no not really, but this is an about page that should be something about you! Now make up your mind and say something about yourself! Probably something good and not bad! Yeah! {/*AboutMeDescText*/}
        </p>
      <Button
        // onPress={() => this.props.navigation.navigate('Contact')}
        content= /*AboutMeButtonText*/ 'Contact' /*AboutMeButtonText*/
        inverted
        style={styles.homePageButton}
      />
      </Container>
    </Container>
  </Container>
  )
}

const styles = {
  homePageButton: {
    backgroundColor: /*AboutMeButtonBackgroundColor*/ 'rgba(250,249,249,0.1)' /*AboutMeButtonBackgroundColor*/,
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: /*AboutMeBackgroundColor*/ '#0e0f0f' /*AboutMeBackgroundColor*/,
    color: '#fff',
    alignItems:'center'
  },
  textBorder: {
    borderColor: /*AboutMeTextBorderColor*/ 'blue' /*AboutMeTextBorderColor*/,
    borderWidth: 1,
    margin: 10,
    backgroundColor: /*AboutMeTextBackgroundColor*/ '#0e0f0f' /*AboutMeTextBackgroundColor*/,
    // textAlign:'center'
  },
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutMeImg: {
    flex: 1,
    // alignSelf: 'stretch',
    width:'100%',
    margin: 20,
    objectFit:'cover'
  },
  aboutMeHeader: {
    color: /*AboutMeHeaderTextColor*/ 'white' /*AboutMeHeaderTextColor*/,
    textAlign: 'center',
    fontSize: 35,
    margin: 5
  },
  text: {
    margin: 10,
    color: /*AboutMeDescTextColor*/ 'white' /*AboutMeDescTextColor*/,
    textAlign: 'center'
  }
};

export default AboutPreview
