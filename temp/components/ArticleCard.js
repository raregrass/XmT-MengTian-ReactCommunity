"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var image = require("../stylesheets/images/more-from-2.png");
var ArticleCard = (function (_super) {
    __extends(ArticleCard, _super);
    function ArticleCard() {
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
    ArticleCard.prototype.render = function () {
        return (React.createElement("div", {key: Date.now(), className: "xmt-article-card mdl-card mdl-shadow--4dp"}, React.createElement("div", {className: "xmt-top mdl-card__actions mdl-card--border"}, React.createElement("div", {className: "mdl-list"}, React.createElement("div", {className: "mdl-list__item"}, React.createElement("span", {className: "mdl-list__item-primary-content"}, React.createElement("i", {className: "material-icons mdl-list__item-avatar"}, "person"), React.createElement("span", null, "王晓飞")))), React.createElement("div", {className: "mdl-layout-spacer"}), React.createElement("span", {className: "xmt-time"}, "2016.3.27")), React.createElement("div", {className: "mdl-card__media"}, React.createElement("img", {src: image})), React.createElement("div", {className: "mdl-card__title"}, React.createElement("h2", {className: "mdl-card__title-text"}, "Welcome")), React.createElement("div", {className: "mdl-card__supporting-text"}, React.createElement("span", {className: "mdl-typography--font-light mdl-typography--subhead"}, "Four tips to make your switch to Android quick and easy")), React.createElement("div", {className: "xmt-bottom mdl-card__actions mdl-card--border"}, React.createElement("a", {className: "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"}, "Get Started"), React.createElement("div", {className: "mdl-layout-spacer"}), React.createElement("button", {className: "mdl-button mdl-button--icon mdl-button--colored"}, React.createElement("i", {className: "material-icons"}, "bookmark_border")), React.createElement("span", {className: "xmt-count"}, "123"), React.createElement("span", {className: "mdl-button mdl-button--icon mdl-button--colored"}, React.createElement("i", {className: "material-icons"}, "favorite_border")), React.createElement("span", {className: "xmt-count"}, "123"), React.createElement("span", {className: "mdl-button mdl-button--icon mdl-button--colored"}, React.createElement("i", {className: "material-icons"}, "share_border")), React.createElement("span", {className: "xmt-count"}, "123"))));
    };
    return ArticleCard;
}(react_1.Component));
exports.ArticleCard = ArticleCard;
//# sourceMappingURL=CardArticle.js.map