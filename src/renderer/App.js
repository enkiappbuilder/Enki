import React, { Component } from "react";
import copy from "../functions/fsCopy";

import { NavBar, Button } from "semantic-ui-react";
class App extends Component {
  render() {
    return (
      <div>
        <Button> I AM BUTTON </Button>
        <h1> HI I AM REACT </h1>
        <div>
          <button onClick={() => copy()}> CLICK ME </button>
        </div>
      </div>
    );
  }
}

export default App;
