"use strict";
var React = require("react");
var react_dom_1 = require("react-dom");
var react_router_1 = require("react-router");
// Main stylesheet.
require("./stylesheets/main.scss");
var index_1 = require("./components/index");
/**********************************************************************************************************************/
react_dom_1.render(React.createElement(react_router_1.Router, {history: react_router_1.browserHistory}, React.createElement(react_router_1.Route, {path: "/", component: index_1.App}, React.createElement(react_router_1.IndexRoute, {component: index_1.Social}), React.createElement(react_router_1.Route, {path: "market", component: index_1.Market}), React.createElement(react_router_1.Route, {path: "world", component: "null"}), React.createElement(react_router_1.Route, {path: "education", component: "null"}), React.createElement(react_router_1.Route, {path: "about", component: index_1.About}))), document.getElementById("app"));
//# sourceMappingURL=test.js.map