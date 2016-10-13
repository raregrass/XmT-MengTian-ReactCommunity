import * as React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, Link, hashHistory} from "react-router";

import {Header} from "./component/header"

/**
 * CSS vendor file
 */
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Our CSS file
 */
import "style/main.css"

/**********************************************************************************************************************/

render(
    <Router history={hashHistory}>
        <Route path="/" component={Header}>
            <IndexRoute component={null}/>
            <Route path="rank" component="null"/>
            <Route path="info" component="null"/>
            <Route path="user" component="null">
                <Route path="profile" component="null"/>
            </Route>
        </Route>
    </Router>,
    document.getElementById("app")
);