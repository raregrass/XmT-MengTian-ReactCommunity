import * as React from "react";
import {IndexLink, Link} from "react-router";
import * as $ from "jquery";

import * as DGGLogo from "media/header-xmt-logo.png";
import * as userDefaultIcon from "media/header-user-icon-default.jpg";

export class Header extends React.Component<any,any> {
    constructor() {
        super();

        this.state = {
            isShowAuthHeaderItem: true
        };
    }

    public render() {

        return (
            <header className="header">

                {/* 公司logo */}
                <div className="logo">
                    <IndexLink to="/">
                        <img src={DGGLogo}/>
                    </IndexLink>
                </div>

                {/* 通用导航栏，对所有用户可见 */}
                <nav className="nav">
                    <Link to="/" className="nav-item">最新文章</Link>
                    <Link to="/hot" className="nav-item">热门文章</Link>
                    <Link to="/official" className="nav-item">精品文章</Link>
                </nav>

                {/* 特权导航栏，需要验证才可以显示 */}
                {
                    this.state.isShowAuthHeaderItem ? (
                        <nav className="nav">
                            <Link to="/mylike" className="nav-item">我的兴趣</Link>
                            <Link to="/mybookmark" className="nav-item">我的收藏</Link>
                            <Link to="/myrequest" className="nav-item">我的邀请</Link>
                        </nav>
                    ) : undefined
                }

                {/* 用户中心图标 */}
                <div className="user-field">
                    <Link to="/user/editor" className="write">撰写文章</Link>
                    <Link to="/user/notification" className="notification">我的通知</Link>
                    <div className="icon">
                        <Link to="/user"><img src={userDefaultIcon}/></Link>
                    </div>
                </div>

            </header>
        );
    }

    public componentDidMount = () => {
        let header = $(".header");

        $(window).scroll(function (e) {
            if ($(this).scrollTop() > 80) {
                header.addClass("fixed");
            } else {
                header.removeClass("fixed");
            }
        });
    };
}
