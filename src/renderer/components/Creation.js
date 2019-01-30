import React, { Component } from "react";
import EditPage from "./EditPage";
const { ipcRenderer } = window.require('electron')

class LandingPage extends Component {
  constructor() {
    super()
    this.handleExport = this.handleExport.bind(this)
  }

  handleExport() {
    ipcRenderer.send('exportProject')
  }
  render() {
    return (
      <div>
        <h1> HERE IS WHERE YOU'LL CUSTOMIZE YOUR APP! </h1>
        <EditPage/>
        <button onClick={this.handleExport}>export files, yeah!</button>
      </div>
    );
  }
}

export default LandingPage;
