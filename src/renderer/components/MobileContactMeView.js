import React from 'react'
import { connect } from 'react-redux'
import { Container, Image, Button, Text, Header, Form, Menu, Item } from 'semantic-ui-react'
import { SocialIcon } from 'react-social-icons'
import myImg from '../../../copyOfProject/assets/images/sampleImages/ice.jpg'


const ContactPreview = (props) => {
  const { appDetails } = props;
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
        // leftComponent={<Hamburger navigationProps={this.props.navigation} />}
        style={{ color: '#132029', backgroundColor: 'rgba(250,249,249,0.8)' }}
        rightComponent={{ icon: 'home', color: '#132029', onPress: () => this.props.navigation.navigate('Home') }}


      >
        <Menu.Item position='left' icon='sidebar' />
        <Menu.Item >{appDetails.ContactScreenHeaderText || 'Header Text'}</Menu.Item>
        <Menu.Item position='right' icon='home' />
      </Menu>

      <Container style={{ textAlign: 'center' }}>
        <Container style={{ display: 'flex', justifyContent: 'center' }}>
          <SocialIcon url="http://twitter.com/" style={{ margin: 10 }} />
          <SocialIcon url="http://instagram.com/" style={{ margin: 10 }} />
          <SocialIcon url="http://facebook.com/" style={{ margin: 10 }} />
        </Container>
        <p style={styles.homePageHeader}>{/*ContactScreenMainText*/}{appDetails.ContactScreenMainText || 'Contact Me!'}{/*ContactScreenMainText*/}</p>
        <Form style={{ marginLeft: 30, marginRight: 30 }}>
          <Form.Field>
            <label style={{ textAlign: 'left', color: 'grey' }}>Name</label>
            <input />
          </Form.Field>
          <Form.Field>
            <label style={{ textAlign: 'left', color: 'grey' }}>Email</label>
            <input />
          </Form.Field>
          <Form.Field>
            <label style={{ textAlign: 'left', color: 'grey' }} >{appDetails.FormMessageText || "What's up?"}</label>
            <input />
          </Form.Field>
        </Form>
        <Button
          content= /*HomescreenButtonText*/'Submit' /*HomescreenButtonText*/
          inverted
          style={styles.homePageButton}
        />
      </Container>



    </Container>

  )
}

const styles = {
  homePageButton: {
    backgroundColor: /*HomeScreenButtonBackgroundColor*/ 'rgba(250,249,249,0.3)' /*HomeScreenButtonBackgroundColor*/,
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
    color: /*HomeScreenHeaderColor*/'#FFFFFF', /* HomeScreenHeaderColor*/
    width: 'auto',
    overflowWrap: 'break-word'
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
    backgroundImage: myImg,
    backgroundSize: 'cover',
    overflow: 'hidden',
    width: '100%',
    height: '100vh',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }
};

const mapStateToProps = state => {
  return {
    appDetails: state.appDetails
  }
}

export default connect(mapStateToProps)(ContactPreview)
