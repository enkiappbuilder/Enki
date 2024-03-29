import React, { Component } from "react";
import copy from '../../functions/fsCopy'
import { Link } from 'react-router-dom'
import corey from './image/corey.jpg'
import galaxy from './video/galaxy.mp4'
import leaves from './video/leaves.mp4'
import lights from './video/lights.mp4'
import river from './video/river.mp4'
import phone from './video/phone.mp4'
import nightroad from './video/nightroad.mp4'
const { ipcRenderer } = window.require('electron')

import { Image, Segment, Container, Button } from 'semantic-ui-react'
import { Text } from 'react'
import { lookup } from "dns";
import { showSideBar, hideSideBar } from '../store/sideBar'
import { connect } from 'react-redux'


class LandingPage extends Component {
  constructor(props) {
    super(props)
  }

  videoRandomizer() {
    const videos = [
      { src: river, color: 'orange' },
      { src: nightroad, color: 'yellow' },
      { src: galaxy, color: 'olive' },
      { src: leaves, color: 'green' },
      { src: lights, color: 'violet' },
      { src: phone, color: 'pink' },
    ]
    videos.sort(function (a, b) {
      return Math.random() > 0.5 ? -1 : 1
    })
    let vid = document.getElementById('vidBack')
    vid.setAttribute("src", videos[0].src)
    let button = document.getElementById('landBut')
    button.setAttribute("color", videos[0].color)
  }

  componentDidMount() {
    this.props.hideSideBar()
  }

  handleUpload() {
    ipcRenderer.send('uploadPhoto')
  }

  render() {
    return (
      <div className='landpage' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: "100vh", overflow: 'hidden' }} >

        <div style={{ postion: 'absolute', color: 'white', fontSize: 250, fontFamily: 'Monoton, cursive', marginBottom: 70 }}>ENKI</div>
        <div style={{ postion: 'absolute', color: 'white', fontSize: 20, marginTop: 30 }}>Mobile App Creator.</div>
        <div style={{ marginTop: 70 }}>
          <Link to='/templates'>
            <Button size='huge' id="landBut" color='green' style={{ postion: 'absolute', display: "grid", margin: 30 }}>
              Get Started!
              </Button>
          </Link>

        </div>
        <div style={{
          position: "absolute", top: 0, left: 0
          , height: "100%", width: "100%", zIndex: -100, overflow: 'hidden'
        }}>
          <video id="vidBack" onEnded={this.videoRandomizer.bind(this)} autoPlay playsInline style={{ height: "100%", width: "100%", objectFit: 'cover' }}>
            <source src={galaxy} type="video/mp4" />
          </video>
        </div>
      </div>

    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showSideBar: () => dispatch(showSideBar()),
    hideSideBar: () => dispatch(hideSideBar())
  }
}

export default connect(null, mapDispatchToProps)(LandingPage);
