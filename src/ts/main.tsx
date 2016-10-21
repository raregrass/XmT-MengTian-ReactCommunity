import * as React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory, IndexRedirect} from "react-router";

import {Community} from "./component/Community";
import {ArticlePage} from "./component/ArticlePage";
import {ArticleCardList} from "./component/ArticleList";
import {UserPage} from "./component/UserPage";
import {UserNotificationCenter} from "./component/UserNotificationCenter"
import {UserProfile} from "./component/UserProfile";
import {UserMyDraftCenter} from "./component/UserMyDraftCenter";
import {UserMyArticleCenter} from "./component/UserMyArticleCenter";

/**
 * CSS vendor file
 */
import "normalize.css";
import "../vendor/font-awesome-4.6.3/css/font-awesome.css";
import "jquery";

/**
 * Our CSS file
 */
import "style/main.scss";

/**********************************************************************************************************************/

render(
    <Router history={browserHistory}>
        <Route path="/" component={Community}>
            <Route component={ArticlePage}>
                <IndexRoute component={ArticleCardList} articleCardList={[{id: 1,author: "raregrass"}]}/>
                <Route path="hot" component={ArticleCardList} articleCardList={[{id: 1,author: "raregrass"}]}/>
                <Route path="official" component={ArticleCardList} articleCardList={[{id: 1,author: "raregrass"}]}/>
                <Route path="mylike" component={ArticleCardList} articleCardList={[{id: 1,author: "raregrass"}]}/>
                <Route path="mybookmark" component={ArticleCardList} articleCardList={[{id: 1,author: "raregrass"}]}/>
                <Route path="myrequest" component={null}/>
            </Route>

            <Route path="user" component={UserPage}>
                <IndexRoute component={UserNotificationCenter}/>
                <Route path="notification" component={UserNotificationCenter}/>
                <Route path="myarticle" component={UserMyArticleCenter}/>
                <Route path="mydraft" component={UserMyDraftCenter}/>
                <Route path="profile" component={UserProfile}/>
                <Route path="editor" component={null}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById("app")
);