import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
  Text
} from 'react-native';
import {
  Header,
  Button
} from 'react-native-elements'

import { Icon } from 'react-native-elements'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: 'null',
  };

  render() {
    const myImg = require('../assets/images/sampleImages/ice.jpg')
    return (
      <View style={styles.container}>

        <ImageBackground
          style={{
            backgroundColor: '#ccc',
            flex: 1,
            position: 'absolute',
            width: '100%',
            height: '100%'
          }}
          source={myImg}
        >
          <Header
            leftComponent={<Hamburger navigationProps={this.props.navigation} />}
            centerComponent={{ text: 'Joe Hu', style: { color: '#132029' } }}
            rightComponent={{ icon: 'home', color: '#132029', onPress: () => this.props.navigation.navigate('Home') }}
            backgroundColor='rgba(250,249,249,0.8)'
          />

          <View style={styles.homePageFlex}>
            <Text style={styles.homePageHeader}>Joseph Hu</Text>
            <Text style={styles.homePageSubHeader}>Photographer and designer.</Text>
            <Button
              onPress={() => this.props.navigation.navigate('About')}
              title='About Me'
              outline
              style={styles.homePageButton}
            />
          </View>
        </ImageBackground>

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
  homePageButton: {
    backgroundColor: 'rgba(250,249,249,0.3)'
  },
  homePageFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homePageHeader: {
    fontSize: 70,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  homePageSubHeader: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  header: {
    top: 0
  },
  container: {
    flex: 1,
    color: '#fff'
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#000000',
    color: '#fff'
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
