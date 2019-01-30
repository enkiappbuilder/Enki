import React, { Component } from "react";
import EditPage from "./EditPage";
const { ipcRenderer } = window.require('electron')
import {showSideBar} from '../store/sideBar'
import {connect} from 'react-redux'
class LandingPage extends Component {
  constructor() {
    super()
    this.handleExport = this.handleExport.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
  }

  componentDidMount(){
    this.props.showSideBar()
  }

  handleExport() {
    ipcRenderer.send('exportProject')
  }
  handleUpload(fileName, location) {

    ipcRenderer.send('uploadPhoto', fileName, location)
  }
  render() {
    return (
      <div>
        <h1> HERE IS WHERE YOU'LL CUSTOMIZE YOUR APP! </h1>
        <EditPage/>
        <button onClick ={() => this.handleUpload("screens/HomeScreen.js", 'ImagePath')}>Click to upload Photo
              </button>
        <button onClick={this.handleExport}>export files, yeah!</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showSideBar: () => dispatch(showSideBar()),
  }
}

export default connect(null,mapDispatchToProps)(LandingPage);
