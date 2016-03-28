"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var Footer = (function (_super) {
    __extends(Footer, _super);
    function Footer() {
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
    Footer.prototype.render = function () {
        return (React.createElement("footer", {className: "mdl-mega-footer"}, React.createElement("div", {className: "mdl-mega-footer__middle-section"}, React.createElement("div", {className: "mdl-mega-footer__drop-down-section"}, React.createElement("input", {className: "mdl-mega-footer__heading-checkbox", type: "checkbox", defaultChecked: true}), React.createElement("h1", {className: "mdl-mega-footer__heading"}, "Features"), React.createElement("ul", {className: "mdl-mega-footer__link-list"}, React.createElement("li", null, React.createElement("a", {href: "#"}, "About")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Terms")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Partners")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Updates")))), React.createElement("div", {className: "mdl-mega-footer__drop-down-section"}, React.createElement("input", {className: "mdl-mega-footer__heading-checkbox", type: "checkbox", defaultChecked: true}), React.createElement("h1", {className: "mdl-mega-footer__heading"}, "Details"), React.createElement("ul", {className: "mdl-mega-footer__link-list"}, React.createElement("li", null, React.createElement("a", {href: "#"}, "Specs")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Tools")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Resources")))), React.createElement("div", {className: "mdl-mega-footer__drop-down-section"}, React.createElement("input", {className: "mdl-mega-footer__heading-checkbox", type: "checkbox", defaultChecked: true}), React.createElement("h1", {className: "mdl-mega-footer__heading"}, "Technology"), React.createElement("ul", {className: "mdl-mega-footer__link-list"}, React.createElement("li", null, React.createElement("a", {href: "#"}, "How it works")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Patterns")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Usage")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Products")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Contracts")))), React.createElement("div", {className: "mdl-mega-footer__drop-down-section"}, React.createElement("input", {className: "mdl-mega-footer__heading-checkbox", type: "checkbox", defaultChecked: true}), React.createElement("h1", {className: "mdl-mega-footer__heading"}, "FAQ"), React.createElement("ul", {className: "mdl-mega-footer__link-list"}, React.createElement("li", null, React.createElement("a", {href: "#"}, "Questions")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Answers")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Contact us"))))), React.createElement("div", {className: "mdl-mega-footer__bottom-section"}, React.createElement("div", {className: "mdl-logo"}, "Title"), React.createElement("ul", {className: "mdl-mega-footer__link-list"}, React.createElement("li", null, React.createElement("a", {href: "#"}, "Help")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Privacy Terms"))))));
    };
    return Footer;
}(react_1.Component));
exports.Footer = Footer;
//# sourceMappingURL=Footer.js.map