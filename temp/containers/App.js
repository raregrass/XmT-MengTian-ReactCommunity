"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h1", null, "This is App!"), this.props.children));
    };
    return App;
}(react_1.Component));
function mapStateToProps(state) {
    var environment = state.environment, navigator = state.navigator;
    return {
        height: environment.height,
        width: environment.width,
        path: navigator.route.path,
    };
}
exports.AppContainer = react_redux_1.connect(mapStateToProps)(App);
//# sourceMappingURL=App.js.map