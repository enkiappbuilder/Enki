import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image

} from 'react-native';
import {
  Header,
  Button,
} from 'react-native-elements'

import Hamburger from '../components/Hamburger'
export default class About extends React.Component {
  static navigationOptions = {
    header: 'About me!',
  };

  render() {
    const aboutImg = require(`../${/*AboutMeImage*/'assets/images/sampleImages/robot-dev.png'/*AboutMeImage*/}`)
    return (
      <View style={styles.container}>
        <Header
          leftComponent={<Hamburger navigationProps={this.props.navigation} />}
          centerComponent={{ text: /*AboutMeHeaderText*/'Joe Hu'/*AboutMeHeaderText*/, style: { color: '#132029' } }}
          rightComponent={{ icon: 'home', color: '#132029', onPress: () => this.props.navigation.navigate('Home') }}
          backgroundColor='rgba(250,249,249,0.8)'
        />
        <View style={styles.flex}>
          <Image
            style={styles.aboutMeImg}
            source={aboutImg}
            resizeMode="contain"
            borderRadius={20}
          />
          <View style={styles.textBorder}>
            <Text style={styles.aboutMeHeader}>
              {/*AboutMeTitleText*/} About Me {/*AboutMeTitleText*/}
            </Text>
            <Text style={styles.text}>
              {/*AboutMeDescText*/}This is just some filler lorem ipsum, no not really, but this is an about page that should be something about you! Now make up your mind and say something about yourself! Probably something good and not bad! Yeah! {/*AboutMeDescText*/}
            </Text>
          </View>
          <Button
            onPress={() => this.props.navigation.navigate('Contact')}
            title= /*AboutMeButtonText*/ 'Contact' /*AboutMeButtonText*/
            outline
            style={styles.homePageButton}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homePageButton: {
    backgroundColor: /*AboutMeButtonBackgroundColor*/ 'rgba(250,249,249,0.1)' /*AboutMeButtonBackgroundColor*/,
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: /*AboutMeBackgroundColor*/ '#0e0f0f' /*AboutMeBackgroundColor*/,
    color: '#fff'
  },
  textBorder: {
    borderColor: /*AboutMeBorderColor*/ 'blue' /*AboutMeBorderColor*/,
    borderWidth: 1,
    margin: 10,
    backgroundColor: /*AboutMeDescBackgroundColor*/ '#0e0f0f' /*AboutMeDescBackgroundColor*/
  },
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutMeImg: {
    flex: 1,
    // alignSelf: 'stretch',
    margin: 20
  },
  aboutMeHeader: {
    color: /*AboutMeTitleColor*/ 'white' /*AboutMeTitleColor*/,
    textAlign: 'center',
    fontSize: 35,
    margin: 5
  },
  text: {
    margin: 10,
    color: /*AboutMeDescColor*/ 'white' /*AboutMeDescColor*/,
    textAlign: 'center'
  }
});
