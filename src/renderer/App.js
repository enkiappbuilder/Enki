import React, { Component } from "react";
import Routes from './routes'
import { EditPage } from "./components";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Routes /> */}
        <EditPage/>
      </div>
    );
  }
}

export default App
