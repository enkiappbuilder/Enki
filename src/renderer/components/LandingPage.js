import React, { Component } from "react";
import copy from '../../functions/fsCopy'
import { Link } from 'react-router-dom'
class LandingPage extends Component {
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
        </div>
      </div>
    );
  }
}
export default LandingPage;

