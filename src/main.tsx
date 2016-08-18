import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import { Router, Route, IndexRoute, browserHistory } from "react-router";
//import { Action, Reducer, Store, createStore, combineReducers } from "redux";
//import { Provider } from "react-redux";
//import thunk from "redux-thunk";

import "./styles/index.scss";

import {App} from "./components/App";

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
