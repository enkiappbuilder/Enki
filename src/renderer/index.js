// Initial welcome page. Delete the following line to remove it.
import React from "react";
import ReactDOM from "react-dom";

import App from "./app";
// import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <>
    <link
      rel="stylesheet"
      href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
    />
    <App />
  </>,
  document.getElementById("app")
);
