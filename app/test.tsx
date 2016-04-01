import * as React from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

// Main stylesheet.
require("./assets/less/main.less");

import {App, Community, Market, Home} from "./components/index";

/**********************************************************************************************************************/



$(document).ready(function() {
    render(
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="world" component="null"/>
                <Route path="market" component={Market}/>
                <Route path="education" component="null"/>
                <Route path="community" component={Community}/>
            </Route>
        </Router>,
        document.getElementById("app")
    );
});