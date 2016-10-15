import * as React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory, IndexRedirect} from "react-router";

import {Community} from "./component/Community";
import {ArticlePage} from "./component/ArticlePage";
import {SectionAllArticle} from "./component/Section-AllArticle";
import {SectionHotArticle} from "./component/Section-HotArticle";
import {SectionOfficialArticle} from "./component/Section-OfficialArticle";
import {UserPage} from "./component/UserPage";
import {UserNotificationCenter} from "./component/UserNotificationCenter"
import {UserProfile} from "./component/UserProfile";
import {UserMyDraftCenter} from "./component/UserMyDraftCenter";
import {UserMyArticleCenter} from "./component/UserMyArticleCenter";

/**
 * CSS vendor file
 */
import "bootstrap/dist/css/bootstrap.css";

/**
 * Our CSS file
 */
import "style/main.css"

/**********************************************************************************************************************/

render(
    <Router history={hashHistory}>
        <Route path="/" component={Community}>
            <IndexRedirect to="/article"/>
            <Route path="article" component={ArticlePage}>
                <IndexRoute component={SectionAllArticle} articleCardList={[{id: 1,author: "raregrass"}]}/>
                <Route path="hot" component={SectionHotArticle}/>
                <Route path="official" component={SectionOfficialArticle}/>
            </Route>
            <Route path="user" component={UserPage}>
                <IndexRoute component={UserNotificationCenter}/>
                <Route path="myarticle" component={UserMyArticleCenter}/>
                <Route path="mydraft" component={UserMyDraftCenter}/>
                <Route path="profile" component={UserProfile}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById("app")
);