import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text
} from 'react-native';

import {
  Header,
  Button
} from 'react-native-elements'

import Hamburger from '../components/Hamburger'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: 'null',
  };

  render() {
    const myImg = require(/*HomeScreenBackgroundImage*/'../assets/images/sampleImages/ice.jpg'/*HomeScreenBackgroundImage*/)
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
            centerComponent={{ text: /*HomeScreenHeaderText*/'Joe Hu'/*HomeScreenHeaderText*/, style: { color: '#132029' } }}
            rightComponent={{ icon: 'home', color: '#132029', onPress: () => this.props.navigation.navigate('Home') }}
            backgroundColor='rgba(250,249,249,0.8)'
          />

          <View style={styles.homePageFlex}>
            <Text style={styles.homePageHeader}>{/*HomeScreenLargeWelcomeText*/}Joseph Hu{/*HomeScreenLargeWelcomeText*/}</Text>
            <Text style={styles.homePageSubHeader}>{/*HomeScreenDescriptionText*/}Photographer and designer.{/*HomeScreenDescriptionText*/}</Text>
            <Button
              onPress={() => this.props.navigation.navigate('About')}
              title= /*HomeScreenButtonText*/ 'About Me' /*HomeScreenButtonText*/
              outline
              style={styles.homePageButton}
            />
          </View>
        </ImageBackground>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  homePageButton: {
    backgroundColor: /*HomeScreenButtonBackgroundColor*/ 'rgba(250,249,249,0.3)' /*HomeScreenButtonBackgroundColor*/
  },
  homePageFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homePageHeader: {
    fontSize: 70,
    textAlign: 'center',
    color: /*HomeScreenLargeWelcomeColor*/'#FFFFFF' /* HomeScreenLargeWelcomeColor*/
  },
  homePageSubHeader: {
    fontSize: 30,
    textAlign: 'center',
    color: /*HomeScreenDescriptionColor*/ '#FFFFFF' /*HomeScreenDescriptionColor*/
  },
  header: {
    top: 0
  },
  container: {
    flex: 1,
    color: '#fff'
  }
});
