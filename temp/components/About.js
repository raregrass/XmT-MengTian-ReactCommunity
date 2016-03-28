"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var About = (function (_super) {
    __extends(About, _super);
    function About() {
        var _this = this;
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
        this.getFooter = function () {
            if (_this.state.footer === "mega") {
                return (React.createElement("footer", {className: "xmt-mega-footer mdl-mega-footer"}, React.createElement("div", {className: "mdl-mega-footer__top-section"}, React.createElement("div", {className: "mdl-mega-footer__left-section"}, React.createElement("button", {className: "mdl-mega-footer__social-btn"}), React.createElement("button", {className: "mdl-mega-footer__social-btn"}), React.createElement("button", {className: "mdl-mega-footer__social-btn", onClick: function () { _this.setState({ footer: "mini" }); }}, "关闭详情")), React.createElement("div", {className: "mdl-mega-footer__right-section"}, React.createElement("a", {className: "mdl-typography--font-light", href: "#!"}, "Introduction"), React.createElement("a", {href: "#!"}, "Introduction"), React.createElement("a", {href: "#!"}, "Introduction"))), React.createElement("div", {className: "mdl-mega-footer__middle-section"}, React.createElement("div", {className: "mdl-mega-footer__drop-down-section"}, React.createElement("input", {className: "mdl-mega-footer__heading-checkbox", type: "checkbox", defaultChecked: true}), React.createElement("h1", {className: "mdl-mega-footer__heading"}, "Features"), React.createElement("ul", {className: "mdl-mega-footer__link-list"}, React.createElement("li", null, React.createElement("a", {href: "#"}, "About")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Terms")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Partners")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Updates")))), React.createElement("div", {className: "mdl-mega-footer__drop-down-section"}, React.createElement("input", {className: "mdl-mega-footer__heading-checkbox", type: "checkbox", defaultChecked: true}), React.createElement("h1", {className: "mdl-mega-footer__heading"}, "Details"), React.createElement("ul", {className: "mdl-mega-footer__link-list"}, React.createElement("li", null, React.createElement("a", {href: "#"}, "Specs")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Tools")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Resources")))), React.createElement("div", {className: "mdl-mega-footer__drop-down-section"}, React.createElement("input", {className: "mdl-mega-footer__heading-checkbox", type: "checkbox", defaultChecked: true}), React.createElement("h1", {className: "mdl-mega-footer__heading"}, "Technology"), React.createElement("ul", {className: "mdl-mega-footer__link-list"}, React.createElement("li", null, React.createElement("a", {href: "#"}, "How it works")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Patterns")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Usage")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Products")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Contracts")))), React.createElement("div", {className: "mdl-mega-footer__drop-down-section"}, React.createElement("input", {className: "mdl-mega-footer__heading-checkbox", type: "checkbox", defaultChecked: true}), React.createElement("h1", {className: "mdl-mega-footer__heading"}, "FAQ"), React.createElement("ul", {className: "mdl-mega-footer__link-list"}, React.createElement("li", null, React.createElement("a", {href: "#"}, "Questions")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Answers")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Contact us"))))), React.createElement("div", {className: "mdl-mega-footer__bottom-section"}, React.createElement("div", {className: "mdl-logo"}, "Title"), React.createElement("ul", {className: "mdl-mega-footer__link-list"}, React.createElement("li", null, React.createElement("a", {href: "#"}, "Help")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Privacy & Terms"))))));
            }
            return (React.createElement("footer", {className: "xmt-mini-footer mdl-mini-footer"}, React.createElement("div", {className: "mdl-mini-footer__left-section"}, React.createElement("div", {className: "mdl-logo"}, "More Information"), React.createElement("ul", {className: "mdl-mini-footer__link-list"}, React.createElement("li", null, React.createElement("a", {href: "#"}, "Help")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Privacy and Terms")), React.createElement("li", null, React.createElement("a", {href: "#"}, "User Agreement")), React.createElement("li", null, React.createElement("button", {className: "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect", onClick: function () { _this.setState({ footer: "mega" }); }}, "查看更多")))), React.createElement("div", {className: "mdl-mini-footer__right-section"}, React.createElement("button", {className: "mdl-mini-footer__social-btn"}), React.createElement("button", {className: "mdl-mini-footer__social-btn"}), React.createElement("button", {className: "mdl-mini-footer__social-btn"}))));
        };
        this.state = {
            footer: "mega"
        };
    }
    About.prototype.render = function () {
        return (React.createElement("div", {className: "xmt-about"}, React.createElement("div", {className: "xmt-first-section mdl-typography--text-center"}, React.createElement("div", {className: "xmt-logo-font xmt-main-slogan"}, "小馒头 —— 你的机器人世界"), React.createElement("div", {className: "xmt-logo-font xmt-sub-slogan"}, "在这里，只管去创造，就像小时候的你一样"), React.createElement("div", {className: "xmt-logo-font xmt-create-world"}, React.createElement("a", {href: ""}, " 创造属于你自己的机器人世界 ")), React.createElement("a", {href: "#screens"}, React.createElement("button", {className: "xmt-fab mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect"}, React.createElement("i", {className: "material-icons"}, "expand_more")))), React.createElement("div", {className: "xmt-second-section mdl-typography--text-center"}, React.createElement("a", {name: "screens"}), React.createElement("div", {className: "xmt-slogan mdl-typography--display-1-color-contrast"}, "这些作品都是由像你一样的天才设计而来"), React.createElement("div", {className: "xmt-showcases"}, [0, 1, 2, 3, 4].map(function () {
            return (React.createElement("div", {className: "xmt-showcase"}, React.createElement("a", {className: "xmt-image-link", href: "#!"}, React.createElement("img", {className: "xmt-image", src: null})), React.createElement("a", {className: "xmt-link mdl-typography--font-regular mdl-typography--text-uppercase", href: ""}, "Android Wear")));
        }))), this.getFooter()));
    };
    return About;
}(react_1.Component));
exports.About = About;
//# sourceMappingURL=About.js.map