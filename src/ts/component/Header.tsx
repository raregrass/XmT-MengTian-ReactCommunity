import * as React from "react";
import {IndexLink, Link} from "react-router";

export class Header extends React.Component<any,any> {
    constructor() {
        super();

        this.state = {
            isShowAuthHeaderItem: true
        };
    }

    public render() {

        /*let headerItems = [
         <IndexLink to="/">
         <span className="mdl-navigation__link">最 新</span>
         </IndexLink>,
         <Link to="/hot">
         <span className="mdl-navigation__link">热 门</span>
         </Link>,
         <Link to="/official">
         <span className="mdl-navigation__link">精 选</span>
         </Link>
         ];
         if (this.state.isShowAuthHeaderItem) {
         headerItems = headerItems.concat([
         <Link to="/mylike">
         <span className="mdl-navigation__link">我的兴趣</span>
         </Link>,
         <Link to="/myfavorite">
         <span className="mdl-navigation__link">我的收藏</span>
         </Link>,
         <Link to="/helpcheck">
         <span className="mdl-navigation__link">邀请审核</span>
         </Link>
         ]);
         }*/

        return (
            <header className="xmt-header ui text menu">

                {/* 公司logo */}
                <img className="xmt-logo header item"/>

                {/* 通用导航栏，对所有用户可见 */}
                <nav className="ui text menu">
                    <IndexLink to="/">
                        <span className="item">最 新</span>
                    </IndexLink>
                    <Link to="/article/hot">
                        <span className="item">热 门</span>
                    </Link>
                    <Link to="/article/official">
                        <span className="item">精 选</span>
                    </Link>
                </nav>

                {/* 特权导航栏，需要验证才可以显示 */}
                {
                    this.state.isShowAuthHeaderItem ? (
                        <nav className="ui text menu">
                            <Link to="/user/mylike">
                                <span className="item">我的兴趣</span>
                            </Link>
                            <Link to="/user/myfavorite">
                                <span className="item">我的收藏</span>
                            </Link>
                            <Link to="/user/helpcheck">
                                <span className="item">邀请审核</span>
                            </Link>
                        </nav>
                    ) : undefined
                }

                {/* 用户中心图标 */}
                <Link to="/user">
                    <span className="item">
                        <img />
                    </span>
                </Link>

            </header>
        );
    }
}
