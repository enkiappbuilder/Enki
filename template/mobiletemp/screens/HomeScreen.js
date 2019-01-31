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
    const myImg = require(/*ImagePath*/'../assets/images/sampleImages/ice.jpg'/*ImagePath*/)
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
            centerComponent={{ text: /*AppName*/'Joe Hu'/*AppName*/, style: { color: '#132029' } }}
            rightComponent={{ icon: 'home', color: '#132029', onPress: () => this.props.navigation.navigate('Home') }}
            backgroundColor='rgba(250,249,249,0.8)'
          />

          <View style={styles.homePageFlex}>
            <Text style={styles.homePageHeader}>{/*LargeWelcomeText*/}Joseph Hu{/*LargeWelcomeText*/}</Text>
            <Text style={styles.homePageSubHeader}>{/*DescriptionText1*/}Photographer and designer.{/*DescriptionText1*/}</Text>
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
  }
});
