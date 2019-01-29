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
import { createAppContainer, createDrawerNavigator } from 'react-navigation'
import { MonoText } from '../components/StyledText';
import { Icon } from 'react-native-elements'
// import { Icon } from 'semantic-ui-react';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={<Hamburger navigationProps={this.props.navigation} />}
          centerComponent={{ text: 'Template 1', style: { color: '#132029' } }}
          rightComponent={{ icon: 'home', color: '#132029' }}
          backgroundColor='#FF69B4'
        />

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.cardContainer}>
            <Card
              image={require( /*test*/ "../../copyOfProject/assets/images/Nina.pdf" /*test*/)}
            >
              <Text h2> Sample Title 2</Text>
              <Text style={{ marginBottom: 10 }}>
                This is a sample text under the title
            </Text>

            </Card>
          </View>
          <View style={styles.cardContainer}>
            <Card
              image={require('../assets/images/sample_art.jpeg')}
            >
              <Text h2> Sample Title 2</Text>
              <Text style={{ marginBottom: 10 }}>
                This is a sample text under the title
            </Text>

            </Card>
          </View>
          <View style={styles.cardContainer}>
            <Card
              image={require('../assets/images/sample_art.jpeg')}
            >
              <Text h2> Sample Title 2</Text>
              <Text style={{ marginBottom: 10 }}>
                This is a sample text under the title
            </Text>

            </Card>
          </View>
        </ScrollView>
      </View>
    );
  }

  // _maybeRenderDevelopmentModeWarning() {
  //   if (__DEV__) {
  //     const learnMoreButton = (
  //       <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
  //         Learn more
  //       </Text>
  //     );

  //     return (
  //       <Text style={styles.developmentModeText}>
  //         Development mode is enabled, your app will be slower but you can use useful development
  //         tools. {learnMoreButton}
  //       </Text>
  //     );
  //   } else {
  //     return (
  //       <Text style={styles.developmentModeText}>
  //         You are not in development mode, your app will run at full speed.
  //       </Text>
  //     );
  //   }
  // }

  // _handleLearnMorePress = () => {
  //   WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  // };

  // _handleHelpPress = () => {
  //   WebBrowser.openBrowserAsync(
  //     'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
  //   );
  // };
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
