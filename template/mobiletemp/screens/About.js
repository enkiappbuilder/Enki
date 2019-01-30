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
  Card
} from 'react-native-elements'
import { createAppContainer, createDrawerNavigator} from 'react-navigation'
import { MonoText } from '../components/StyledText';
import {Icon} from 'react-native-elements'
// import { Icon } from 'semantic-ui-react';

export default class About extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
            <Header
              leftComponent={<Hamburger navigationProps = {this.props.navigation}/>}
              centerComponent={{ text: 'Template 1', style: { color: '#132029'}}}
              rightComponent = {{ icon: 'home', color: '#132029' }}
              backgroundColor = '#FF69B4'
            />

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style = {styles.textComp}>
            <Text style = {{color: 'white', textAlign: 'center', fontSize: 35}}>
              About Me
            </Text>
          </View>
          <View style = {styles.textComp}>
            <Text style = {{color: 'white', }}>
              This is just some filler lorem ipsum, no not really, but this is an about page that should be something about you! Now make up your mind and say something about yourself! Probably something good and not bad! Yeah!
            </Text>
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
    return(
      <View style = {{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Icon
          name = 'menu'
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
