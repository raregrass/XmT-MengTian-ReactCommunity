import * as React from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, Link, browserHistory} from "react-router";

import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

// Main stylesheet.
// TODO: Why this one doesn't work?
// import "foundation-sites/dist/foundation-flex.min.css";
import "./style/foundation.min.css";
import "./style/main.css";

// Use indexReducer to create the global store.
import {indexReducer} from "./reducers/index";

// Mount our app main container.
import {AppContainer} from "./containers/App";

/*************************************************************************/

/*declare global {
 interface Window{
 devToolsExtension:Function;
 }
 }
 const store = createStore(indexReducer, compose(
 applyMiddleware(thunk),
 window.devToolsExtension ? window.devToolsExtension() : (f:any) => f
 ));
 
 render(
 <Provider store={store}>
 <Router history={browserHistory}>
 <Route path="/" component={AppContainer}>
 <IndexRoute component={null}/>
 <Route path="rank" component="null"/>
 <Route path="info" component="null"/>
 <Route path="user" component="null">
 <Route path="profile" component="null"/>
 </Route>
 </Route>
 </Router>
 </Provider>,
 document.getElementById("app")
 );*/
