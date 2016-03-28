"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var Nav = (function (_super) {
    __extends(Nav, _super);
    function Nav() {
        _super.apply(this, arguments);
    }
    Nav.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h1", null, "I am Nav Container!")));
    };
    return Nav;
}(react_1.Component));
function mapStateToProps(state) {
    var environment = state.environment, navigator = state.navigator;
    return {
        height: environment.height,
        width: environment.width,
        path: navigator.route.path,
    };
}
exports.NavContainer = react_redux_1.connect(mapStateToProps)(Nav);
//# sourceMappingURL=Nav.js.map