import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { Carousel } from "react-responsive-carousel";

import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import {liveSideBar} from "../store/liveSideBar"
import {showliveMENU, hideliveMenu} from "../store/liveSideBar"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import userImage from "../../functions/userImage";

class GalleryPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  render() {
    const appDetails = this.props.appDetails ? this.props.appDetails : this.props.stateDetails;
    let userImage1 = userImage(appDetails.GalleryImage1Path);
    let userImage2 = userImage(appDetails.GalleryImage2Path);
    let userImage3 = userImage(appDetails.GalleryImage3Path);
    let userImage4 = userImage(appDetails.GalleryImage4Path);
    let userImage5 = userImage(appDetails.GalleryImage5Path);
    const images = [
      {
        title: appDetails.GalleryTitleText1 || "Cyberpunk Street",
        description:
          appDetails.GalleryDescriptionText1 ||
          /*GalleryDescriptionText1*/ "My photo description. This was taken in 2014 on a Nikon D810 with long exposure." /*GalleryDescriptionText1*/,
        location:
          userImage1 ||
          /*GalleryImage1Path*/ require("../../../template/mobiletemp//assets/images/sampleImages/cyberpunkStreet.jpg") /*GalleryImage1Path*/
      },
      {
        title: appDetails.GalleryTitleText2 || "Forest",
        description:
          appDetails.GalleryDescriptionText2 ||
          /*GalleryDescriptionText2*/ "This image is taken in RAW and converted to JPEG with Capture NX 2." /*GalleryDescriptionText2*/,
        location:
          userImage2 ||
          /*GalleryImage2Path*/ require("../../../template/mobiletemp//assets/images/sampleImages/forest.jpg") /*GalleryImage2Path*/
      },
      {
        title:
          appDetails.GalleryTitleText3 || "Icy Winter" /*GalleryTitleText3*/,
        description:
          appDetails.GalleryDescriptionText3 ||
          /*GalleryDescriptionText3*/ "Abstract icy winter, taken with Nikon D800. " /*GalleryDescriptionText3*/,
        location:
          userImage3 ||
          /*GalleryImage3Path*/ require("../../../template/mobiletemp//assets/images/sampleImages/ice.jpg") /*GalleryImage3Path*/
      },
      {
        title:
          appDetails.GalleryTitleText4 ||
          /*GalleryTitleText4*/ "Lantern Street" /*GalleryTitleText4*/,
        description:
          appDetails.GalleryDescriptionText4 ||
          /*GalleryDescriptionText4*/ "Unique lantern street in Japan." /*GalleryDescriptionText4*/,
        location:
          userImage4 ||
          /*GalleryImage4Path*/ require("../../../template/mobiletemp//assets/images/sampleImages/lanternStreet.jpg") /*GalleryImage4Path*/
      },
      {
        title:
          appDetails.GalleryTitleText5 ||
          /*GalleryTitleText5*/ "Rainy Street" /*GalleryTitleText5*/,
        description:
          appDetails.GalleryDescriptionText5 ||
          /*GalleryDescriptionText5*/ "This photo was taken on a rainy Sunday. I'm glad I braved the weather to get the shot!" /*GalleryDescriptionText5*/,
        location:
          userImage5 ||
          /*GalleryImage5Path*/ require("../../../template/mobiletemp//assets/images/sampleImages/rainOnStreet.jpg") /*GalleryImage5Path*/
      }
    ];

    return (
      <Container
        style={{
          flex: 1,
          color: "#fff",
          backgroundColor: appDetails.GalleryBackgroundColor || "#000000",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: '100%'
        }}
      >
        <Menu
          secondary
          style={{ color: "#132029", backgroundColor: "rgba(250,249,249,0.8)" }}
        >
          <Menu.Item position="left" icon="sidebar" onClick = {()=>this.props.showMENU()} />
          <Menu.Item style={{ maxWidth: '20ch', overflowWrap: 'break-word' }}>{appDetails.GalleryHeaderText || "Header Text"}</Menu.Item>

          <Menu.Item
            onClick={() => this.props.changePage("Home")}
            position="right"
            icon="home"
          />
        </Menu>

        <Container style={{ textAlign: "center" }}>
          <Carousel>
            {images.map(image => {
              return (
                <div>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={image.location}
                  />
                  <div className="legend">
                    <p
                      style={{
                        color: appDetails.GalleryPhotoTitleColor || "white"
                      }}
                    >
                      {image.title}
                    </p>
                    <p
                      style={{
                        color:
                          appDetails.GalleryPhotoDescriptionColor || "white"
                      }}
                    >
                      {image.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </Container>
      </Container>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    showMENU: () => dispatch(showliveMENU()),
    hideMenu: () => dispatch(hideliveMenu()),
  }
}
const mapStateToProps = (state) => {
  return {
    stateDetails: state.appDetails,
    sideBarStatus: state.liveSideBar
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GalleryPreview);
