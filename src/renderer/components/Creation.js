import React, { Component } from "react";
import EditPage from "./EditPage";
const { ipcRenderer } = window.require('electron')
import {showSideBar} from '../store/sideBar'
import {connect} from 'react-redux'
class LandingPage extends Component {
  constructor() {
    super()
    this.handleExport = this.handleExport.bind(this)
  }

  componentDidMount(){
    this.props.showSideBar()
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

const mapDispatchToProps = dispatch => {
  return {
    showSideBar: () => dispatch(showSideBar()),
  }
}

export default connect(null,mapDispatchToProps)(LandingPage);
