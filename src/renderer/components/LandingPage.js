import React, { Component } from "react";
import copy from '../../functions/fsCopy'
import { Link } from 'react-router-dom'
const { ipcRenderer } = window.require('electron')
import {showSideBar, hideSideBar} from '../store/sideBar'
import {connect} from 'react-redux'
import { updateText, updateImageName } from '../../functions/rewrite'

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.handleUpload = this.handleUpload.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    this.props.hideSideBar()
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

