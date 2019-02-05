import React from 'react'
import { Container, Button, Form, Menu, Image } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel'

const images = [
  {
    title: /*GalleryTitleText1*/'Cyberpunk Street'/*GalleryTitleText1*/,
    description: /*GalleryDescriptionText1*/"My photo description. This was taken in 2014 on a Nikon D810 with long exposure."/*GalleryDescriptionText1*/,
    location: /*GalleryImage1Path*/require('../../../template/mobiletemp//assets/images/sampleImages/cyberpunkStreet.jpg')/*GalleryImage1Path*/
  },
  {
    title: /*GalleryTitleText2*/'Forest'/*GalleryTitleText2*/,
    description: /*GalleryDescriptionText2*/"This image is taken in RAW and converted to JPEG with Capture NX 2."/*GalleryDescriptionText2*/,
    location: /*GalleryImage2Path*/require('../../../template/mobiletemp//assets/images/sampleImages/forest.jpg')/*GalleryImage2Path*/
  },
  {
    title: /*GalleryTitleText3*/'Icy Winter'/*GalleryTitleText3*/,
    description: /*GalleryDescriptionText3*/"Abstract icy winter, taken with Nikon D800. "/*GalleryDescriptionText3*/,
    location: /*GalleryImage3Path*/require('../../../template/mobiletemp//assets/images/sampleImages/ice.jpg')/*GalleryImage3Path*/
  },
  {
    title: /*GalleryTitleText4*/'Lantern Street'/*GalleryTitleText4*/,
    description: /*GalleryDescriptionText4*/"Unique lantern street in Japan."/*GalleryDescriptionText4*/,
    location: /*GalleryImage4Path*/require('../../../template/mobiletemp//assets/images/sampleImages/lanternStreet.jpg')/*GalleryImage4Path*/
  },
  {
    title: /*GalleryTitleText5*/"Rainy Street"/*GalleryTitleText5*/,
    description: /*GalleryDescriptionText5*/"This photo was taken on a rainy Sunday. I'm glad I braved the weather to get the shot!"/*GalleryDescriptionText5*/,
    location: /*GalleryImage5Path*/require('../../../template/mobiletemp//assets/images/sampleImages/rainOnStreet.jpg')/*GalleryImage5Path*/
  }
]

import 'react-responsive-carousel/lib/styles/carousel.min.css';

class GalleryPreview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {

    const { appDetails } = this.props

    return (
      <Container style={{
        flex: 1,
        color: '#fff',
        backgroundColor: '#000000',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}>

        <Menu
          secondary
          style={{ color: '#132029', backgroundColor: 'rgba(250,249,249,0.8)' }}
        >
          <Menu.Item position='left' icon='sidebar' />
          <Menu.Item >{appDetails.GalleryHeaderText || 'Header Text'}</Menu.Item>
          <Menu.Item position='right' icon='home' />
        </Menu>

        <Container style={{ textAlign: 'center' }}>
          <Carousel>
            {images.map(image => {
              return (
                <div>
                  <img style={{ height: "100%", width: "100%" }} src={image.location} />
                  <div className="legend">
                    <p>{image.title}</p>
                    <p>{image.description}</p>
                  </div>
                </div>
              )
            })}

          </Carousel>
        </Container>
      </Container>
    )
  }
}

const styles = {
  homePageButton: {
    backgroundColor: 'rgba(250,249,249,0.3)',
    marginTop: 15,
    marginBottom: 15
  },
  homePageFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homePageHeader: {
    fontSize: 35,
    textAlign: 'center',
    margin: 0,
    color: '#FFFFFF',
    width: 'auto',
    overflowWrap: 'break-word'
  },
  homePageSubHeader: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  header: {
    top: 0
  },
  container: {
    flex: 1,
    color: '#fff',
    backgroundSize: 'cover',
    overflow: 'hidden',
    width: '100%',
    height: '100vh',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }
};

export default GalleryPreview
