import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import {
  Header,
  Card,
  Container,
  FormInput,
  FormLabel,
  FormValidationMessage,
  SocialIcon

} from 'react-native-elements'
import { Icon } from 'react-native-elements'

export default class Contact extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (

      <View style={styles.container}>
        <Header
          leftComponent={<Hamburger navigationProps={this.props.navigation} />}
          centerComponent={{ text: 'Joe Hu', style: { color: '#132029' } }}
          rightComponent={{ icon: 'home', color: '#132029', onPress: () => this.props.navigation.navigate('Home') }}
          backgroundColor='rgba(250,249,249,0.8)'
        />

        <View>
          <SocialIcon
            title='Some Twitter Message'
            button
            type='twitter'
          />

        </View>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.textComp}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 35 }}>
              Contact Me!
            </Text>
          </View>
          <View>
            <FormLabel>Name</FormLabel>
            <View style={{ backgroundColor: 'white' }}>
              <FormInput style={{ backgroundColor: 'white' }} />
            </View>
            <FormValidationMessage>{'Please enter your name!'}</FormValidationMessage>
            <FormLabel>Email</FormLabel>
            <View style={{ backgroundColor: 'white' }}>
              <FormInput style={{ backgroundColor: 'white' }} />
            </View>
            <FormValidationMessage>{'Please enter your email!'}</FormValidationMessage>
            <FormLabel>What's up?</FormLabel>
            <View style={{ backgroundColor: 'white' }}>
              <FormInput style={{ backgroundColor: 'white' }} />
            </View>
            <FormValidationMessage>{'What do you want to tell us?'}</FormValidationMessage>
          </View>

        </ScrollView>
      </View>
    );
  }


}

class Hamburger extends React.Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Icon
            name='menu'
          />
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    color: '#fff'
  },
  textComp: {
    backgroundColor: '#000000',
    alignContent: 'center'

  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#000000'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
