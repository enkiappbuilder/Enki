import React, { Component } from "react";
import copy from '../../functions/fsCopy'
import { Link } from 'react-router-dom'
const { ipcRenderer } = window.require('electron')
import {showSideBar} from '../store/sideBar'
import {connect} from 'react-redux'
import { updateText, updateImageName } from '../../functions/rewrite'

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.handleUpload = this.handleUpload.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleNavigate = this.handleNavigate.bind(this)
  }

  handleUpload() {
    ipcRenderer.send('uploadPhoto')
  }
  handleNavigate(){
    // this.props.history.push('/templates')
    this.props.showSideBar()
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
            <button onClick={this.handleNavigate}>
              CLICK ME TO GO TO TEMPLATES
            </button>
          </Link>
          <button onClick={() => copy()}> CLICK ME TO MAKE COPY OF APP TEMPLATE </button>
          <button onClick={this.handleUpload}> CLICK ME TO UPLOAD A PHOTO! </button>
          <button onClick={this.handleClick}> THIS BUTTON IS TEESTING THE UPDATTE IMAGE NAME FUNC</button>
        </div>
      </div> 
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showSideBar: () => dispatch(showSideBar())
  }
}
export default connect(null, mapDispatchToProps)(LandingPage);

