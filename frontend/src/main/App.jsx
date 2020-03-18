import React from "react";
import { Provider } from "react-redux";
import Store from "../store";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

import Routes from "./routes";

function App() {
  return (
    <div className="container">
      <Provider store={Store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
