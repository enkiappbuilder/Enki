import React, { Component } from "react";
import copy from '../../functions/fsCopy'
import { Link } from 'react-router-dom'
import corey from './image/corey.jpg'
import night from './video/night.mp4'
import galaxy from'./video/galaxy.mp4'
import leaves from './video/leaves.mp4'
import lights from './video/lights.mp4'
import river from './video/river.mp4'
import phone from './video/phone.mp4'
import nightroad from './video/nightroad.mp4'
const { ipcRenderer } = window.require('electron')
import {Image, Segment, Container, Button} from 'semantic-ui-react'
import { lookup } from "dns";

class LandingPage extends Component {
  constructor() {
    super()
    this.handleUpload = this.handleUpload.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  videoRandomizer(){
    const videos = [
      {src: night, color: 'red'},
      {src: river, color: 'orange'},
      {src: nightroad, color: 'yellow'},
      {src: galaxy, color: 'olive'},
      {src: leaves, color: 'green'},
      {src: lights, color: 'violet'},
      {src: phone, color: 'pink'},
    ]
    videos.sort(function(a,b){
      return Math.random() > 0.5 ? -1: 1
    })
    let vid = document.getElementById('vidBack')
    vid.setAttribute("src", videos[0].src)
    let button = document.getElementById('landBut')
    button.setAttribute("color", videos[0].color)
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
      <div style={{marginTop: '200px'}}>
        <Image size = 'small' centered src = {corey} ></Image>
        <Container textAlign = 'center'>
        <h1> Enki </h1>
        </Container>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '100px'}}>
            <Link to='/templates'>
              <Button size = 'huge' id="landBut"inverted color = 'green' style={{postion: 'absolute', display: "grid",}}>
                Get Started!
              </Button>
            </Link>
        </div>
            {/* <button onClick={() => copy()}> CLICK ME TO MAKE COPY OF APP TEMPLATE </button>
            <button onClick={this.handleUpload}> CLICK ME TO UPLOAD A PHOTO! </button> */}
      </div>
      <div style ={{position: "absolute", top: 0, left: 0
, height: "100%", width: "100%", zIndex: -100, overflow: 'hidden'}}>
        <video id = "vidBack" onEnded={this.videoRandomizer.bind(this)} autoPlay playsInline style={{height: "100%", width: "100%", objectFit: 'cover'}}>
        <source src={night} type="video/mp4"/>
        {/* <source src={night} type="video/mp4"/> */}
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
