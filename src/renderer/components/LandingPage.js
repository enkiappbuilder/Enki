import React, { Component } from "react";
import copy from '../../functions/fsCopy'
import { Link } from 'react-router-dom'
import corey from './image/corey.jpg'
import night from './video/night.mp4'
import river from './video/river.mp4'
const { ipcRenderer } = window.require('electron')
import {Image, Segment, Container, Button} from 'semantic-ui-react'

class LandingPage extends Component {
  constructor() {
    super()
    this.handleUpload = this.handleUpload.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleUpload() {
    ipcRenderer.send('uploadPhoto')
  }

  handleClick() {
    updateImageName('../../copyOfProject/screens/Gallery.js', 'test', '../hey/ho')
  }

  render() {
    return (
      <div className='landpage' style={{maxHeight: '100vh', maxWidth: '100vw', overflow: 'hidden'} } >
      <div></div>
      <div style={{marginTop: '100px'}}>
        <Image size = 'small' centered src = {corey} ></Image>
        <Container textAlign = 'center'>
        <h1> Enki </h1>
        </Container>
        <div>
            <Link to='/templates'>
              <Button inverted color = 'olive' style={{postion: 'absolute', display: "grid",}}>
                Get Started!
              </Button>
            </Link>
        </div>
            {/* <button onClick={() => copy()}> CLICK ME TO MAKE COPY OF APP TEMPLATE </button>
            <button onClick={this.handleUpload}> CLICK ME TO UPLOAD A PHOTO! </button> */}
      </div>
      <div style ={{position: "absolute", top: 0, left: 0
, height: "100%", width: "100%", zIndex: -100, overflow: 'hidden'}}>
        <video autoPlay loop playsInline style={{height: "100%", width: "100%", objectFit: 'cover'}}>
        <source src={river} type="video/mp4"/>
        </video>
      </div>
      </div>
    );
  }
}
export default LandingPage;

<style>
  .landpage{

  }
</style>
