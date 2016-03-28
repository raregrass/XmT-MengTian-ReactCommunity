"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var image = require("../stylesheets/images/more-from-1.png");
var ProductionCard = (function (_super) {
    __extends(ProductionCard, _super);
    function ProductionCard() {
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
    }
    ProductionCard.prototype.render = function () {
        return (React.createElement("div", {key: Date.now(), className: "xmt-production-card mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--4dp"}, React.createElement("div", {className: "mdl-card__media"}, React.createElement("img", {src: image})), React.createElement("div", {className: "mdl-card__title"}, React.createElement("h2", {className: "mdl-card__title-text"}, "Welcome")), React.createElement("div", {className: "mdl-card__supporting-text"}, React.createElement("span", {className: "mdl-typography--font-light mdl-typography--subhead"}, "Four tips to make your switch to Android quick and easy")), React.createElement("div", {className: "mdl-card__actions mdl-card--border"}, React.createElement("a", {className: "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"}, "Get Started"), React.createElement("div", {className: "mdl-layout-spacer"}), React.createElement("button", {className: "mdl-button mdl-button--icon mdl-button--colored"}, React.createElement("i", {className: "material-icons"}, "favorite")), React.createElement("button", {className: "mdl-button mdl-button--icon mdl-button--colored"}, React.createElement("i", {className: "material-icons"}, "share")))));
    };
    return ProductionCard;
}(react_1.Component));
exports.ProductionCard = ProductionCard;
//# sourceMappingURL=ProductionCard.js.map