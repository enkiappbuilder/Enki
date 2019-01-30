// Initial welcome page. Delete the following line to remove it.
import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
=======
import { HashRouter as Router } from 'react-router-dom'
>>>>>>> master

import App from "./app";
import store from './store'

ReactDOM.render(
  <>
    <link
      rel="stylesheet"
      href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
    />

    <Provider store={store}>
      <Router>
        <App style={{ height: "100vh", display: "flex",}} />
      </Router>
    </Provider>
  </>,
  document.getElementById("app")
);
