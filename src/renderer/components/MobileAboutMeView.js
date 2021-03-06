import React from "react";
import {
  Container,
  Image,
  Button,
  Menu,
} from "semantic-ui-react";
import { connect } from 'react-redux'
import {liveSideBar} from "../store/liveSideBar"
import {showliveMENU, hideliveMenu} from "../store/liveSideBar"
import userImage from '../../functions/userImage'

const AboutPreview = props => {
  const appDetails = props.appDetails ? props.appDetails : props.stateDetails;
  let UserAboutImg = userImage(appDetails.AboutMeImage)

  const defaultAboutMeDesc =
    "This is just some filler lorem ipsum, no not really, but this is an about page that should be something about you! Now make up your mind and say something about yourself! Probably something good and not bad! Yeah! ";
  const styles = {
    AboutMePageButton: {
      backgroundColor:
        /*AboutMeButtonBackgroundColor*/ appDetails.AboutMeButtonBackgroundColor ||
        "rgba(250,249,249,0.1)" /*AboutMeButtonBackgroundColor*/,
      marginBottom: 20,
      alignSelf: "center",
      textAlign: "center",
      overflowWrap: 'break-word',
      width: '50%'
    },
    container: {
      flex: 1,
      backgroundColor:
        /*AboutMeBackgroundColor*/ appDetails.AboutMeBackGroundColor || "#0e0f0f" /*AboutMeBackgroundColor*/,
      color: "#fff",
      alignItems: "center"
    },
    textBorder: {
      borderStyle: "solid",
      borderColor:
        /*AboutMeTextBorderColor*/ appDetails.AboutMeBorderColor ||
        "blue" /*AboutMeTextBorderColor*/,
      borderWidth: "1px",
      backgroundColor:
        /*AboutMeTextBackgroundColor*/ appDetails.AboutMeDescBackgroundColor ||
        "#0e0f0f" /*AboutMeTextBackgroundColor*/,
      textAlign: "center",
      margin: 10
    },
    flex: {
      overflowY: 'auto',
      height: '88%'
    },
    aboutMeImg: {
      flex: 1,
      // alignSelf: 'stretch',
      width: "100%",
      margin: 20,
      objectFit: "cover"
    },
    aboutMeHeader: {
      color:
        /*AboutMeHeaderTextColor*/ appDetails.AboutMeTitleColor ||
        "white" /*AboutMeHeaderTextColor*/,
      textAlign: "center",
      fontSize: 35,
      margin: 5,
      overflowWrap: 'break-word'
    },
    text: {
      margin: 10,
      color:
        /*AboutMeDescTextColor*/ appDetails.AboutMeDescColor ||
        "white" /*AboutMeDescTextColor*/,
      textAlign: "center",
      overflowWrap: 'break-word'
    }
  };

  return (
    <Container
      fluid
      style={{
        height: '300',
        alignItems: "center",
        flex: 1,
        color: "#fff",
        alignItems: "center",
        backgroundColor:
          /*AboutMeBackgroundColor*/ appDetails.AboutMeBackGroundColor ||
          "#0e0f0f" /*AboutMeBackgroundColor*/,
        height: '100%'
      }}
    >
      <Menu
        secondary
        style={{ color: "#132029", backgroundColor: "rgba(250,249,249,0.8)" }}
      >
        <Menu.Item position="left" icon="sidebar" onClick = {()=>props.showMENU()}/>

        <Menu.Item>{appDetails.AboutMeHeaderText || "Header Text"}</Menu.Item>
        <Menu.Item position="right" icon="home" onClick={() => props.changePage('Home')} />
      </Menu>

      <Container style={styles.flex}>

        <Image
          style={{ flex: 1, alignSelf: 'stretch', padding: 20, height: "auto", width: 'auto' }}
          src={
            UserAboutImg || /*AboutMeImg*/ "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /*AboutMeImg*/
          }
          borderradius="20px"
        />
        <Container style={{ textAlign: "center" }} >
          <div style={styles.textBorder}>
            <p style={styles.aboutMeHeader}>
              {/*AboutMeHeader*/} {appDetails.AboutMeTitleText || "Title Text"}{" "}
              {/*AboutMeHeader*/}
            </p>
            <p style={styles.text}>
              {/*AboutMeDescText*/}
              {appDetails.AboutMeDescText || defaultAboutMeDesc}
              {/*AboutMeDescText*/}
            </p>

            <Button
              content=/*AboutMeButtonText*/ {
                appDetails.AboutMeButtonText || "Contact"
              } /*AboutMeButtonText*/
              inverted
              style={styles.AboutMePageButton}
              onClick={() => props.changePage("Contact")}
            />

          </div>
        </Container>

      </Container>
    </Container>

  );
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutPreview);

