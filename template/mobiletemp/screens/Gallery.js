import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  Platform,
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
    title: 'my photo title',
    description: "my photo description. This was taken in 2014 on a Nikon D810 with long exposure.",
    location: require('../assets/images/sampleImages/cyberpunkStreet.jpg')
  },
  {
    title: 'Forest',
    description: "this is my photo desc.",
    location: require('../assets/images/sampleImages/forest.jpg')
  },
  {
    title: 'Icy Winter',
    description: "this is my photo desc.",
    location: require('../assets/images/sampleImages/ice.jpg')
  },
  {
    Title: 'This is my photo title',
    description: "this is my photo desc.",
    location: require('../assets/images/sampleImages/ice.jpg')
  },
  {
    title: 'this is my photo title',
    description: "this is my photo desc.",
    location: require('../assets/images/sampleImages/ice.jpg')
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
