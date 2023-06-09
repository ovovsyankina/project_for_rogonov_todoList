import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/reducer/store";
import "./style/index.css";
import AppContainer from "./components/App/AppContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <div id="fon" className="fon"></div>
    <AppContainer />
  </Provider>
);
