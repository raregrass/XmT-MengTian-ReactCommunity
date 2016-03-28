"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var react_router_1 = require('react-router');
var logo = require("../stylesheets/images/android-logo.png");
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        _super.apply(this, arguments);
        this.componentDidUpdate = function () {
            // This upgrades all upgradable components (i.e. with 'mdl-js-*' className)
            componentHandler.upgradeDom();
        };
    }
    Header.prototype.render = function () {
        return (React.createElement("header", {className: "xmt-main-header mdl-layout__header mdl-layout__header-row"}, React.createElement("img", {className: "xmt-header__logo", src: logo}), React.createElement("div", {className: "mdl-layout-spacer"}), React.createElement("nav", {className: "mdl-navigation mdl-layout--large-screen-only"}, React.createElement(react_router_1.IndexLink, {to: "/"}, React.createElement("span", {className: "mdl-navigation__link"}, "社 区")), React.createElement(react_router_1.Link, {to: "/market"}, React.createElement("span", {className: "mdl-navigation__link"}, "淘 器")), React.createElement(react_router_1.Link, {to: "/world"}, React.createElement("span", {className: "mdl-navigation__link"}, "世 界")), React.createElement(react_router_1.Link, {to: "/education"}, React.createElement("span", {className: "mdl-navigation__link"}, "教 育")), React.createElement(react_router_1.Link, {to: "/about"}, React.createElement("span", {className: "mdl-navigation__link"}, "关 于")))));
    };
    return Header;
}(react_1.Component));
exports.Header = Header;
//# sourceMappingURL=Header.js.map