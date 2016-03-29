import * as React from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

// Main stylesheet.
import "./assets/stylesheets/main.scss";

import {App, Community, Market, About} from "./components/index";

/**********************************************************************************************************************/

render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Community}/>
            <Route path="market" component={Market}/>
            <Route path="world" component="null"/>
            <Route path="education" component="null"/>
            <Route path="about" component={About}/>
        </Route>
    </Router>,
    document.getElementById("app")
);