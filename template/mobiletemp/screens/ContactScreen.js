import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity
} from 'react-native';
import {
  Header,
  FormInput,
  FormLabel,
  FormValidationMessage,
  SocialIcon,
  Button,
  Link
} from 'react-native-elements'

import Hamburger from '../components/Hamburger'

export default class Contact extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super()
    this.state = {
      name: '',
      nameError: false,
      email: '',
      emailError: false,
      message: '',
      messageError: false
    }
    this.handleFormSubmission = this.handleFormSubmission.bind(this)
  }

  handleFormSubmission() {
    this.state.name.length === 0 ? this.setState({ nameError: true }) : this.setState({ nameError: false })
    this.state.email.length === 0 ? this.setState({ emailError: true }) : this.setState({ emailError: false })
    this.state.message === "" ? this.setState({ messageError: true }) : this.setState({ messageError: false })

    if (!this.state.nameError || !this.state.emailError || !this.state.messageError) {
      this.nameInput.clearText()
      this.emailInput.clearText()
      this.messageInput.clearText()
      this.setState({
        name: '',
        email: '',
        message: ''
      })
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={<Hamburger navigationProps={this.props.navigation} />}
          centerComponent={{ text: /*ContactScreenHeaderText*/'Joe Hu' /*ContactScreenHeaderText*/, style: { color: '#132029' } }}
          rightComponent={{ icon: 'home', color: '#132029', onPress: () => this.props.navigation.navigate('Home') }}
          backgroundColor='rgba(250,249,249,0.8)'
        />

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          {/* start of social view */}
          <View style={styles.social}>
            <TouchableOpacity onPress={() => Linking.openURL( /*ContactScreenInstagramURLText*/ 'https://www.instagram.com/fullstackacademy/' /*ContactScreenInstagramURLText*/)}>
              <SocialIcon
                type="instagram"
                href='instagram.com'
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL( /*ContactScreenTwitterURLText*/ 'https://twitter.com/fullstack' /*ContactScreenTwitterURLText*/)}>
              <SocialIcon
                type="twitter"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL( /*ContactScreenFacebookURLText*/ 'https://www.facebook.com/FullstackAcademy/' /*ContactScreenFacebookURLText*/)}>
              <SocialIcon
                type="facebook"
              />
            </TouchableOpacity>
          </View>
          {/* end of social view */}

          {/* contact me main text */}
          <View style={styles.textComp}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 35 }}>
              {/*ContactScreenMainText*/}Contact Me!{/*ContactScreenMainText*/}
            </Text>
          </View>
          {/* end of contact me header text */}

          <View style={styles.form}>
            <FormLabel>Name</FormLabel>

            <View style={{ backgroundColor: 'white' }}>
              <FormInput onChangeText={(text) => this.setState({ name: text })} style={{ backgroundColor: 'white' }} ref={input => { this.nameInput = input }} />
            </View>
            {this.state.nameError ? <FormValidationMessage>{'Please enter your name!'}</FormValidationMessage> : null}

            <FormLabel>Email</FormLabel>
            <View style={{ backgroundColor: 'white' }}>
              <FormInput onChangeText={(text) => this.setState({ email: text })} style={{ backgroundColor: 'white' }} ref={input => { this.emailInput = input }} />
            </View>
            {this.state.emailError ? <FormValidationMessage>{'Please enter your email!'}</FormValidationMessage> : null}

            <FormLabel>{/*FormMessageText*/}What's up?{/*FormMessageText*/}</FormLabel>
            <View style={{ backgroundColor: 'white' }}>
              <FormInput onChangeText={(text) => this.setState({ message: text })} style={{ backgroundColor: 'white' }} ref={input => { this.messageInput = input }} />
            </View>
            {this.state.messageError ? <FormValidationMessage>{'What do you want to tell us?'}</FormValidationMessage> : null}


            <Button
              onPress={this.handleFormSubmission}
              title="Submit"
              outline
              style={styles.button}
            />
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 15,
    backgroundColor: /*ContactScreenSubmitButtonBackgroundColor*/ 'rgba(255,255,255,0.1)' /*ContactScreenSubmitButtonBackgroundColor*/
  },
  container: {
    flex: 1,
    backgroundColor: /*ContactScreenBackgroundColor*/ '#000000'/*ContactScreenBackgroundColor*/,
    color: '#fff'
  },
  textComp: {
    alignContent: 'center'
  },
  form: {
    margin: 10
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 15
  }
});
