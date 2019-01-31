import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Header
} from 'react-native-elements'
import { Icon } from 'react-native-elements'
export default class About extends React.Component {
  static navigationOptions = {
    header: 'About me!',
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

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.textComp}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 35 }}>
              About Me
            </Text>
          </View>
          <View style={styles.textComp}>
            <Text style={{ color: 'white', }}>
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
  navigationFilename: {
    marginTop: 5,
  }
});
