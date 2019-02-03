import React, { Component } from "react";
import { Button } from 'semantic-ui-react'
import { updateText } from "../../functions/rewrite";

class ConfirmationPage extends Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(file) {
    return () => updateText(file, this.props.appDetails);
  }
  render(){
    return (
      <div>
      <div>Carousel Placeholder</div>
      <button onClick={this.handleExport}>export files, yeah!</button>
      <Button
          onClick={this.handleClick(
            `../../copyOfProject/`,
          )}
        >
          Save To Mobile App
        </Button>
      </div>
    )
  }
}

export default ConfirmationPage
