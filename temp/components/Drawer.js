"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var react_router_1 = require('react-router');
var Drawer = (function (_super) {
    __extends(Drawer, _super);
    function Drawer() {
        _super.apply(this, arguments);
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
    }
    Drawer.prototype.render = function () {
        return (React.createElement("aside", {className: "xmt-main-drawer mdl-layout__drawer"}, React.createElement("span", {className: "mdl-layout__title"}, "小馒头"), React.createElement("nav", {className: "mdl-navigation"}, React.createElement(react_router_1.IndexLink, {to: "/"}, React.createElement("span", {className: "mdl-navigation__link"}, "社 区")), React.createElement(react_router_1.Link, {to: "/market"}, React.createElement("span", {className: "mdl-navigation__link"}, "淘 器")), React.createElement(react_router_1.Link, {to: "/world"}, React.createElement("span", {className: "mdl-navigation__link"}, "世 界")), React.createElement(react_router_1.Link, {to: "/education"}, React.createElement("span", {className: "mdl-navigation__link"}, "教 育")), React.createElement(react_router_1.Link, {to: "/about"}, React.createElement("span", {className: "mdl-navigation__link"}, "关 于")))));
    };
    return Drawer;
}(react_1.Component));
exports.Drawer = Drawer;
//# sourceMappingURL=Drawer.js.map