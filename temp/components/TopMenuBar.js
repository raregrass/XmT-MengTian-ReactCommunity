"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var TopMenuBar = (function (_super) {
    __extends(TopMenuBar, _super);
    function TopMenuBar() {
        _super.apply(this, arguments);
    }
    TopMenuBar.prototype.render = function () {
        return (React.createElement("ul", {className: "menu align-center "}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#"}, "One")), React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("i", {className: "fi-list"}), " ", React.createElement("span", null, "One"))), React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("i", {className: "fi-list"}), " ", React.createElement("span", null, "Two"))), React.createElement("li", null, React.createElement("a", {href: "#"}, "Four"))));
    };
    return TopMenuBar;
}(react_1.Component));
exports.TopMenuBar = TopMenuBar;
//# sourceMappingURL=TopMenuBar.js.map