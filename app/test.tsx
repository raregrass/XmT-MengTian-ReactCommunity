import * as React from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

// Main stylesheet.
import "./stylesheets/main.scss";

import {App, Social, Market, About} from "./components/index";

/**********************************************************************************************************************/

render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Social}/>
            <Route path="market" component={Market}/>
            <Route path="world" component="null"/>
            <Route path="education" component="null"/>
            <Route path="about" component={About}/>
        </Route>
    </Router>,
    document.getElementById("app")
);