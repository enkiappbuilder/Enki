import React from "react";
import {
  Container,
  Image,
  Button,
  Text,
  Header,
  Form,
  Menu,
  Item
} from "semantic-ui-react";
import { connect } from "react-redux";

const AboutPreview = props => {
  const { appDetails } = props;
  console.log('appDetails:', appDetails);
  const defaultAboutMeDesc =
    "This is just some filler lorem ipsum, no not really, but this is an about page that should be something about you! Now make up your mind and say something about yourself! Probably something good and not bad! Yeah! ";
  const styles = {
    AboutMePageButton: {
      backgroundColor:
        /*AboutMeButtonBackgroundColor*/ appDetails.AboutMeButtonBackgroundColor ||
        "rgba(250,249,249,0.1)" /*AboutMeButtonBackgroundColor*/,
      marginBottom: 20,
      alignSelf: "center",
      textAlign: "center"
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
      textAlign: "center"
    },
    flex: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
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
      margin: 5
    },
    text: {
      margin: 10,
      color:
        /*AboutMeDescTextColor*/ appDetails.AboutMeDescColor ||
        "white" /*AboutMeDescTextColor*/,
      textAlign: "center"
    }
  };

  return (
    <Container
      style={{
        alignItems: "center",
        flex: 1,
        color: "#fff",
        alignItems: "center",
        backgroundColor:
          /*AboutMeBackgroundColor*/ appDetails.AboutMeBackGroundColor ||
          "#0e0f0f" /*AboutMeBackgroundColor*/
      }}
    >
      <Menu
        secondary
        style={{ color: "#132029", backgroundColor: "rgba(250,249,249,0.8)" }}
      >
        <Menu.Item position="left" icon="sidebar" />
        <Menu.Item>{appDetails.AboutMeHeaderText || "Header Text"}</Menu.Item>
        <Menu.Item position="right" icon="home" />
      </Menu>
      <Container style={styles.flex}>
        <Image
          style={{ objectFit: "cover" }}
          src={
            /*AboutMeImg*/ "https://cloud.fullstackacademy.com/Corey.jpg?mtime=20170626111607" /*AboutMeImg*/
          }
          borderradius="20px"
        />
        <Container style={{ textAlign: "center" }} />
        <div style={styles.textBorder}>
          <p style={styles.aboutMeHeader}>
            {/*AboutMeHeader*/} {appDetails.AboutMeTitleText || "Title Text"}{" "}
            {/*AboutMeHeader*/}
          </p>
          <p style={styles.text}>
            {/*AboutMeDescText*/}
            {appDetails.AboutMeDescText || defaultAboutMeDesc }
            {/*AboutMeDescText*/}
          </p>
          <Button
            // onPress={() => this.props.navigation.navigate('Contact')}
            content=/*AboutMeButtonText*/ {
              appDetails.AboutMeButtonText || "Contact"
            } /*AboutMeButtonText*/
            inverted
            style={styles.AboutMePageButton}
          />
        </div>
      </Container>
    </Container>
  );
};

// const mapStateToProps = state => {
//   return {
//     appDetails: state.appDetails
//   };
// };

export default AboutPreview;
