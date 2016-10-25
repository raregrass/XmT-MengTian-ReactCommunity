import * as React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory, IndexRedirect, Redirect} from "react-router";

import {Community} from "./component/Community";

import {ArticlePage} from "./component/ArticlePage";

import {UserPage} from "./component/UserPage";
import {UserNotification} from "./component/UserNotification"
import {UserProfile} from "./component/UserProfile";
import {UserDraft} from "./component/UserDraft";
import {UserArticle} from "./component/UserArticle";
import {UserCenter} from "./component/UserCenter";

/**
 * CSS vendor file
 */
import "normalize.css";
import "font-awesome.css";
import "jquery";

/**
 * Our CSS file
 */
import "style/main.scss";

/**********************************************************************************************************************/

render(
    <Router history={browserHistory}>
        <Route path="/" component={Community}>
            <IndexRedirect to="/article/list"/>

            <Route path="article/list" component={ArticlePage}/>

            <Route path="article/id/:articleId" component={null}/>

            <Route path="user/:id" component={UserPage}>
                <IndexRedirect to="center"/>
                <Route path="center" component={UserCenter}/>
                <Route path="notification" component={UserNotification}/>
                <Route path="article" component={UserArticle}/>
                <Route path="draft" component={UserDraft}/>
                <Route path="fans" component={UserProfile}/>
                <Route path="watch" component={UserProfile}/>
                <Route path="share" component={UserProfile}/>
                <Route path="like" component={UserProfile}/>
                <Route path="profile" component={UserProfile}/>
            </Route>

            <Route path="editor" component={null}/>

            <Redirect from="**" to="/"/>
        </Route>
    </Router>,
    document.getElementById("app")
);