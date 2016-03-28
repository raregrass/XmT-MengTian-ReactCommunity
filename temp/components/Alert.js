"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
/*************************************************************************/
var ALERT_TYPES = [
    "primary",
    "success",
    "warning",
    "danger"
];
var Alert = (function (_super) {
    __extends(Alert, _super);
    function Alert() {
        _super.apply(this, arguments);
    }
    Alert.prototype.render = function () {
        return (React.createElement("button", {type: "button", className: "success button"}, "Hello world!"));
    };
    Alert.propTypes = {
        children: react_1.PropTypes.node.isRequired,
        className: react_1.PropTypes.string,
        type: react_1.PropTypes.oneOf(ALERT_TYPES).isRequired,
    };
    return Alert;
}(react_1.Component));
exports.Alert = Alert;
//# sourceMappingURL=Alert.js.map