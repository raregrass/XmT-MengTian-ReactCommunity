"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var index_1 = require("./index");
var Market = (function (_super) {
    __extends(Market, _super);
    function Market() {
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
    Market.prototype.render = function () {
        return (React.createElement("div", {className: "xmt-market"}, React.createElement("div", {className: "mdl-grid"}, [0, 1, 2, 3, 4, 5, 6, 7].map(function () {
            return (React.createElement(index_1.ProductionCard, null));
        }))));
    };
    return Market;
}(react_1.Component));
exports.Market = Market;
//# sourceMappingURL=Market.js.map