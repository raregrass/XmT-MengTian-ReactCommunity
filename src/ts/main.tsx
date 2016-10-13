import * as React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, Link, browserHistory} from "react-router";

import {Header} from "./component/header"

/**
 * CSS vendor
 */
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Our CSS file
 */
import "style/main.css"

/**********************************************************************************************************************/

render(<Header />, document.getElementById("root"));
