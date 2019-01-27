import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Templates extends Component {
  render() {
    return (
      <div>
        <h1> HI I AM TEMPLATE PAGE PAGE </h1>
        <Link to='/create'>
          <button >
            CLICK ME TO GO TO CREATION / CUSTOMIZATION PAGE!
            </button>
        </Link>
      </div>
    );
  }
}

export default Templates;
