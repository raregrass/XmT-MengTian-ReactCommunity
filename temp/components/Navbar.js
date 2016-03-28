"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var left_nav_1 = require("material-ui/lib/left-nav");
var menu_item_1 = require("material-ui/lib/menus/menu-item");
var raised_button_1 = require("material-ui/lib/raised-button");
var Narbar = (function (_super) {
    __extends(Narbar, _super);
    function Narbar(props) {
        var _this = this;
        _super.call(this, props);
        this.handleToggle = function () { return _this.setState({ open: !_this.state.open }); };
        this.state = {
            open: true
        };
    }
    Narbar.prototype.render = function () {
        return (React.createElement("div", null, React.createElement(left_nav_1.default, {open: this.state.open, docked: true, width: 200}, React.createElement("menuitem", null, React.createElement(raised_button_1.default, {label: "Toggle LeftNav", onTouchTap: this.handleToggle, className: "narbar-close-button"})), React.createElement(menu_item_1.default, null, "Menu Item"), React.createElement(menu_item_1.default, null, "Menu Item 2"))));
    };
    return Narbar;
}(react_1.Component));
exports.Narbar = Narbar;
//# sourceMappingURL=Navbar.js.map