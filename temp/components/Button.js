"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        _super.apply(this, arguments);
    }
    Button.prototype.render = function () {
        return (React.createElement("button", {type: "button", className: "success button"}, "Hello world!"));
    };
    return Button;
}(react_1.Component));
exports.Button = Button;
//# sourceMappingURL=Button.js.map