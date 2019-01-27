// Initial welcome page. Delete the following line to remove it.
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'

import App from "./app";

ReactDOM.render(
  <>
    <link
      rel="stylesheet"
      href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
    />
    <Router>
      <App />
    </Router>
  </>,
  document.getElementById("app")
);
