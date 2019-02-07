import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Dimensions,
  ScrollView
} from 'react-native';

import {
  Header
} from 'react-native-elements'

import Hamburger from '../components/Hamburger'

const deviceWidth = Dimensions.get('window').width
const win = Dimensions.get('window');

const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10

const images = [
  {
    title: /*GalleryTitleText1*/'Cyberpunk Street'/*GalleryTitleText1*/,
    description: /*GalleryDescriptionText1*/"My photo description. This was taken in 2014 on a Nikon D810 with long exposure."/*GalleryDescriptionText1*/,
    location: require(`../${/*GalleryImage1Path*/'assets/images/sampleImages/cyberpunkStreet.jpg'/*GalleryImage1Path*/}`)
  },
  {
    title: /*GalleryTitleText2*/'Forest'/*GalleryTitleText2*/,
    description: /*GalleryDescriptionText2*/"This image is taken in RAW and converted to JPEG with Capture NX 2."/*GalleryDescriptionText2*/,
    location: require(`../${/*GalleryImage2Path*/'assets/images/sampleImages/forest.jpg'/*GalleryImage2Path*/}`)
  },
  {
    title: /*GalleryTitleText3*/'Icy Winter'/*GalleryTitleText3*/,
    description: /*GalleryDescriptionText3*/"Abstract icy winter, taken with Nikon D800. "/*GalleryDescriptionText3*/,
    location: require(`../${/*GalleryImage3Path*/'assets/images/sampleImages/ice.jpg'/*GalleryImage3Path*/}`)
  },
  {
    title: /*GalleryTitleText4*/'Lantern Street'/*GalleryTitleText4*/,
    description: /*GalleryDescriptionText4*/"Unique lantern street in Japan."/*GalleryDescriptionText4*/,
    location: require(`../${/*GalleryImage4Path*/'assets/images/sampleImages/lanternStreet.jpg'/*GalleryImage4Path*/}`)
  },
  {
    title: /*GalleryTitleText5*/"Rainy Street"/*GalleryTitleText5*/,
    description: /*GalleryDescriptionText5*/"This photo was taken on a rainy Sunday. I'm glad I braved the weather to get the shot!"/*GalleryDescriptionText5*/,
    location: require(`../${/*GalleryImage5Path*/'assets/images/sampleImages/rainOnStreet.jpg'/*GalleryImage5Path*/}`)
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
        <View style={styles.cardView} key={`image${i}`}>
          <Image
            key={`image${i}`}
            source={image.location}
            style={{
              alignSelf: 'center',
              width: win.width,
              height: win.height / 1.3
            }}
            resizeMode="contain"
          />
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignSelf: 'center',
            width: win.width,
            marginBottom: 8
          }}>
            <Text style={styles.title} >{image.title}</Text>
            <Text style={styles.text}>{image.description}</Text>
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
          centerComponent={{ text: /*GalleryHeaderText*/ 'Joe Hu' /*GalleryHeaderText*/, style: { color: '#132029' } }}
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


const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: /*GalleryBackgroundColor*/ 'rgba(0,0,0,0.95)' /*GalleryBackgroundColor*/
  },
  header: {
    flex: 1,
    color: '#fff',
    width: '100%',
    position: 'relative'
  },
  title: {
    top: 0,
    alignSelf: 'center',
    color: /*GalleryPhotoTitleColor*/ 'white' /*GalleryPhotoTitleColor*/,
    margin: 10,
    fontWeight: 'bold'
  },
  text: {
    alignSelf: 'center',
    position: 'relative',
    color: /*GalleryPhotoDescriptionColor*/ 'white' /*GalleryPhotoDescriptionColor*/,
    margin: 10
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
    backgroundColor: '#ffffff'
  },
  contentContainer: {
    paddingTop: 30,
  },
  navigationFilename: {
    marginTop: 5,
  },
});
