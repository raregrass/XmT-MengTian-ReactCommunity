import * as React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

//import { Action, Reducer, Store, createStore, combineReducers } from "redux";
//import { Provider } from "react-redux";
//import thunk from "redux-thunk";

import "stylesRoot/index.scss";

import { App } from "./components/home-main";

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="home" getComponent={(location, callback) => {
                require.ensure([], (require:any) => {
                    callback(null, require("./components/home-main.tsx"));
                }, "home");
            } }>
            </Route>
            <Route path="course" getComponent={(location, callback) => {
                require.ensure([], (require: any) => {
                    callback(null, require("./components/course-main.tsx"));
                }, "course");
            } }>
            </Route>
            <Route path="xlib" getComponent={(location, callback) => {
                require.ensure([], (require: any) => {
                    callback(null, require("./components/xlib-main.tsx"));
                }, "xlib");
            } }>
            </Route>
            <Route path="game" getComponent={(location, callback) => {
                require.ensure([], (require: any) => {
                    callback(null, require("./components/game-main.tsx"));
                }, "game");
            } }>
            </Route>
        </Route>
    </Router>,
    document.getElementById("root")
);