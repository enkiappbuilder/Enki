import React, { Component } from "react";
import copy from '../../functions/fsCopy'
import { Link } from 'react-router-dom'
const { ipcRenderer } = window.require('electron')

class LandingPage extends Component {
  constructor() {
    super()
    this.handleUpload = this.handleUpload.bind(this)
  }

  handleUpload() {
    ipcRenderer.send('uploadPhoto')
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
        </div>
      </div>
    );
  }
}
export default LandingPage;

