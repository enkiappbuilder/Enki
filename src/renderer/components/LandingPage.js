import React, { Component } from "react";
import copy from '../../functions/fsCopy'
import { Link } from 'react-router-dom'
const { ipcRenderer } = window.require('electron')

import { updateText, updateImageName } from '../../functions/rewrite'

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
      <div>
        <h1> HI I AM LANDING PAGE </h1>
        <div>
          <Link to='/templates'>
            <button >
              CLICK ME TO GO TO TEMPLATES
            </button>
          </Link>
          <button onClick={() => copy()}> CLICK ME TO MAKE COPY OF APP TEMPLATE </button>
          <button onClick={this.handleUpload}> CLICK ME TO UPLOAD A PHOTO! </button>
          <button onClick={this.handleClick}> TEST ME!!!</button>
        </div>
      </div>
    );
  }
}
export default LandingPage;

