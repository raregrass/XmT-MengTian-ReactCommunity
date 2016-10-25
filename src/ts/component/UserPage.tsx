import * as React from 'react'
import {Link} from "react-router";

import * as userSky from "media/user-sky.jpg";
import * as userDefaultIcon from "media/user-icon-default.jpg";

/**********************************************************************************************************************/
interface Props {
}
interface Stats {
}
export class UserPage extends React.Component<Props, Stats> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div className="user-page">

                <div className="big-picture-wrapper">
                    <img src={userSky} className="big-picture"/>

                    <div className="big-icon-wrapper">
                        <img src={userDefaultIcon} className="big-icon"/>
                        <div className="user-name">
                            {"我是BetaGo"}
                            <i className="fa fa-mars"></i>
                        </div>
                        <div className="reputation">
                            <i className="fa fa-magnet"></i>
                            声望值 {"14"}
                        </div>
                    </div>
                </div>

                <div className="brief-info">
                    <div className="item-wrapper">
                        <Link to="/user" className="item">文章 {"0"}</Link>
                    </div>
                    <div className="item-wrapper">
                        <Link to="/user" className="item">文章 {"0"}</Link>
                    </div>
                    <div className="item-wrapper">
                        <Link to="/user" className="item">文章 {"0"}</Link>
                    </div>
                </div>

                <div className="main-content-wrapper">

                    <div className="left-nav">
                        <ul className="menu">
                            <li className="item">
                                <Link to="/user/center" className="link">
                                    个人首页
                                </Link>
                            </li>
                            <li className="item">
                                <Link to="/user/notification" className="link">
                                    他的粉丝
                                </Link>
                            </li>
                            <li className="item">
                                <Link to="/user/notification" className="link">
                                    他的关注
                                </Link>
                            </li>
                            <li className="item">
                                <Link to="/user/notification" className="link">
                                    他的文章
                                </Link>
                            </li>
                            <li className="item">
                                <Link to="/user/notification" className="link">
                                    他的分享
                                </Link>
                            </li>
                            <li className="item">
                                <Link to="/user/notification" className="link">
                                    他的赞
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="content-wrapper">

                        {this.props.children}

                    </div>

                </div>

            </div>
        );
    }
}
