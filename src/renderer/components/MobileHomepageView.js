import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Button,
  Menu
} from "semantic-ui-react";
import {liveSideBar} from "../store/liveSideBar"
import {showliveMENU, hideliveMenu} from "../store/liveSideBar"
import myImg from "../../../template/mobiletemp/assets/images/sampleImages/ice.jpg";
import userImage from '../../functions/userImage'
import fs from "fs-extra";
// import { url } from 'inspector';


const HomePreview = (props) => {
  const appDetails = props.appDetails ? props.appDetails : props.stateDetails

  let userImg = null;

  // 'assets/images/' || 'assets/images/image.jpg'
  // let imageToFind = appDetails.HomeScreenBackgroundImage ||
  // let path = null;
  if (appDetails.HomeScreenBackgroundImage) {
    const path = appDetails.HomeScreenBackgroundImage;
    userImg = fs.readFileSync(`copyOfProject/${path}`, { encoding: "base64" });
  }

  let image = `url(${myImg})`;
  // if (userImg) image = `url(data:image/jpeg;base64,${userImg})`;
  if (userImg) image = `url(${userImage(appDetails.HomeScreenBackgroundImage)}`
  console.log('image:', image);

  const styles = {
    homePageButton: {
      backgroundColor:
        /*HomeScreenButtonBackgroundColor*/ appDetails.HomeScreenButtonBackgroundColor ||
        "rgba(250,249,249,0.3)" /*HomeScreenButtonBackgroundColor*/,
      overflowWrap: 'break-word',
      width: '50%',
      alignItems: 'center'
    },
    homePageFlex: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    homePageHeader: {
      fontSize: 49,
      textAlign: "center",
      border: '20 red solid',
      color:
        /*HomeScreenHeaderColor*/ appDetails.HomeScreenLargeWelcomeColor ||
        "#FFFFFF" /* HomeScreenHeaderColor*/,
      overflowWrap: 'break-word',
      margin: 0
    },
    homePageSubHeader: {
      fontSize: 20,
      textAlign: "center",
      color:
        /*HomeScreenSubHeaderColor*/ appDetails.HomeScreenDescriptionColor ||
        "#FFFFFF" /*HomeScreenSubHeaderColor*/,
      overflowWrap: 'break-word'
    },
    header: {
      top: 0
    },
    container: {
      flex: 1,
      color: "#fff",
      // backgroundImage: myImg,
      // backgroundSize:'cover',
      overflow: "hidden",
      width: "100%",
      height: "100vh",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat"
    }
  };

  return (
    <Container
      style={{
        // display:'flex',
        flex: 1,
        color: "#fff",
        backgroundImage: image,
        alignItems: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: '100%'
      }}
    >
      {/* <img src={`data:image/jpeg;base64,${userImg}`} /> */}
      <Menu
        secondary
        style={{ color: "#132029", backgroundColor: "rgba(250,249,249,0.8)" }}
      >
        <Menu.Item position="left" icon="sidebar" onClick = {()=>props.showMENU()}/>
        <Menu.Item style={{ maxWidth: '20ch', overflowWrap: 'break-word' }}>
          {appDetails.HomeScreenHeaderText || "Header Text"}
        </Menu.Item>
        <Menu.Item position="right" icon="home" />
      </Menu>

      <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: "center", overflowY: 'auto', height: '90%' }}>
        <p style={styles.homePageHeader}>
          {/*LargeWelcomeText*/}
          {appDetails.HomeScreenLargeWelcomeText || "Welcome Text"}
          {/*LargeWelcomeText*/}
        </p>
        <p style={styles.homePageSubHeader}>
          {/*DescriptionText1*/}
          {appDetails.HomeScreenDescriptionText || "Photographer and designer."}
          {/*DescriptionText1*/}
        </p>
        <div>
          <Button
            // onPress={() => this.props.navigation.navigate('About')}
            content=/*HomescreenButtonText*/ {
              appDetails.HomeScreenButtonText || "About Me"
            } /*HomescreenButtonText*/
            inverted
            style={styles.homePageButton}
            onClick={() => props.changePage('About')}
          />
        </div>
      </Container>
    </Container>
  );
};
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

export default connect(mapStateToProps,mapDispatchToProps)(HomePreview)
