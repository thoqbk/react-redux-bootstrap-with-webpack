import React, {Component} from 'react';
import {render} from 'react-dom';
import App from "./ui/App.jsx";
import "./style/main.scss";
import store from "./redux/store.js";
import {Provider} from "react-redux";

let provider = <Provider store={store}>
  <App />
</Provider>;

render(provider, document.getElementById('app'));
