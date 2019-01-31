import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated,
  Dimensions,
  ScrollView
} from 'react-native';

import {
  Header
} from 'react-native-elements'

import { Icon } from 'react-native-elements'
const deviceWidth = Dimensions.get('window').width
const win = Dimensions.get('window');

const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10

const images = [
  {
    title: /*image1Title*/'my photo title'/*image1Title*/,
    description: /*image1desc*/"my photo description. This was taken in 2014 on a Nikon D810 with long exposure."/*image1desc*/,
    location: /*image1Path*/require('../assets/images/sampleImages/cyberpunkStreet.jpg')/*image1Path*/
  },
  {
    title: /*image2Title*/'Forest'/*image2Title*/,
    description: /*image2desc*/"this is my photo desc."/*image2desc*/,
    location: /*image2Path*/require('../assets/images/sampleImages/forest.jpg')/*image2Path*/
  },
  {
    title: /*image3Title*/'Icy Winter'/*image3Title*/,
    description: /*image3desc*/"this is my photo desc."/*image3desc*/,
    location: /*image3Path*/require('../assets/images/sampleImages/ice.jpg')/*image3Path*/
  },
  {
    Title: /*image4Title*/'This is my photo title'/*image4Title*/,
    description: /*image4desc*/"this is my photo desc."/*image4desc*/,
    location: /*image4Path*/require('../assets/images/sampleImages/lanternStreet.jpg')/*image4Path*/
  },
  {
    title: /*image5Title*/'this is my photo title'/*image5Title*/,
    description: /*image5desc*/"this is my photo desc."/*image5desc*/,
    location: /*image5Path*/require('../assets/images/sampleImages/rainOnStreet.jpg')/*image5Path*/
  }
]

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: 'null',
  };
  numItems = images.length
  itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
  animVal = new Animated.Value(0)

  render() {
    let imageArray = []
    let barArray = []
    images.forEach((image, i) => {
      const thisImage = (
        <View style={{ flex: 1, flexDirection: 'column' }} key={`image${i}`}>
          <Image
            key={`image${i}`}
            source={image.location}
            style={{
              alignSelf: 'center',
              width: win.width,
              height: win.height / 1.3,
            }}
            resizeMode="contain"
          />
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignSelf: 'center',
            width: win.width
          }}>
            <Text style={{ top: 0, alignSelf: 'center' }} >{image.title}</Text>
            <Text style={{ alignSelf: 'center' }}>{image.description}</Text>
          </View>

        </View >
      )
      imageArray.push(thisImage)

      const scrollBarVal = this.animVal.interpolate({
        inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
        outputRange: [-this.itemWidth, this.itemWidth],
        extrapolate: 'clamp',
      })

      const thisBar = (
        <View
          key={`bar${i}`}
          style={[
            styles.track,
            {
              width: this.itemWidth,
              marginLeft: i === 0 ? 0 : BAR_SPACE,
            },
          ]}
        >
          <Animated.View

            style={[
              styles.bar,
              {
                width: this.itemWidth,
                transform: [
                  { translateX: scrollBarVal },
                ],
              },
            ]}
          />
        </View>
      )
      barArray.push(thisBar)
    })

    return (
      <View
        flex={1}
      >
        <Header
          style={styles.header}
          leftComponent={<Hamburger navigationProps={this.props.navigation} />}
          centerComponent={{ text: 'Joe Hu', style: { color: '#132029' } }}
          rightComponent={{ icon: 'home', color: '#132029', onPress: () => this.props.navigation.navigate('Home') }}
          backgroundColor='rgba(250,249,249,0.8)'
        />

        <View
          style={styles.container}
          flex={1}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={10}
            pagingEnabled
            onScroll={
              Animated.event(
                [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
              )
            }
          >

            {imageArray}

          </ScrollView>
          <View
            style={styles.barContainer}
          >
            {barArray}
          </View>
        </View>
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
  header: {
    flex: 1,
    color: '#fff',
    width: '100%'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barContainer: {
    position: 'absolute',
    zIndex: 2,
    top: 40,
    flexDirection: 'row',
  },
  track: {
    backgroundColor: '#ccc',
    overflow: 'hidden',
    height: 2,
  },
  bar: {
    backgroundColor: '#5294d6',
    height: 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#000000'
  },
  contentContainer: {
    paddingTop: 30,
  },
  navigationFilename: {
    marginTop: 5,
  },
});
