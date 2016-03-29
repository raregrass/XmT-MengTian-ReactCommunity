"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var react_router_1 = require("react-router");
var logo = require("../assets/images/android-logo.png");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.call(this);
        this.componentDidUpdate = function () {
            // This upgrades all upgradable components (i.e. with 'mdl-js-*' className)
            componentHandler.upgradeDom();
            // We could have done this manually for each component
            /*
             * var submitButton = this.refs.submit.getDOMNode();
             * componentHandler.upgradeElement(submitButton, "MaterialButton");
             * componentHandler.upgradeElement(submitButton, "MaterialRipple");
             */
        };
        this.state = {};
    }
    App.prototype.render = function () {
        return (React.createElement("div", {className: "xmt-app"}, React.createElement("div", {className: "mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-drawer-button "}, React.createElement("header", {className: "xmt-main-header mdl-layout__header mdl-layout__header-row"}, React.createElement("img", {className: "xmt-header__logo", src: logo}), React.createElement("div", {className: "mdl-layout-spacer"}), React.createElement("nav", {className: "mdl-navigation mdl-layout--large-screen-only"}, React.createElement(react_router_1.IndexLink, {to: "/"}, React.createElement("span", {className: "mdl-navigation__link"}, "首 页")), React.createElement(react_router_1.Link, {to: "/world"}, React.createElement("span", {className: "mdl-navigation__link"}, "世 界")), React.createElement(react_router_1.Link, {to: "/market"}, React.createElement("span", {className: "mdl-navigation__link"}, "商 城")), React.createElement(react_router_1.Link, {to: "/education"}, React.createElement("span", {className: "mdl-navigation__link"}, "教 育")), React.createElement(react_router_1.Link, {to: "/community"}, React.createElement("span", {className: "mdl-navigation__link"}, "社 区")))), React.createElement("section", {className: "xmt-main-content mdl-layout__content"}, this.props.children))));
    };
    return App;
}(react_1.Component));
exports.App = App;
//# sourceMappingURL=App.js.map