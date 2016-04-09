import * as React from "react";
import {Component, PropTypes} from "react";

import {Link, IndexLink} from "react-router";

const logo = require("../assets/images/android-logo.png");

/*************************************************************************/
interface Props{
}
interface Stats{
}
export class App extends Component<Props, Stats>{
    constructor(){
        super();
    }

    public render(){
        return (
            <div className="xmt-app">
                {/* Wrap the layout used by MDL for preventing the errors from react */}

                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-drawer-button ">

                    {/* Main Header */}
                    <header className="xmt-main-header mdl-layout__header mdl-layout__header-row">

                        {/* Logo */}
                        <img className="xmt-header__logo" src={logo}/>

                        {/* Add spacer to align navigation menu to the right */}
                        <div className="mdl-layout-spacer"></div>

                        {/* Navigation. We hide it in small screens. */}
                        <nav className="mdl-navigation mdl-layout--large-screen-only">
                            <IndexLink to="/">
                                <span className="mdl-navigation__link">首 页</span>
                            </IndexLink>
                            <Link to="/world">
                                <span className="mdl-navigation__link">世 界</span>
                            </Link>
                            <Link to="/market">
                                <span className="mdl-navigation__link">商 城</span>
                            </Link>
                            <Link to="/education">
                                <span className="mdl-navigation__link">教 育</span>
                            </Link>
                            <Link to="/community">
                                <span className="mdl-navigation__link">社 区</span>
                            </Link>
                        </nav>

                    </header>

                    {/* Main Section */}
                    <section className="xmt-main-content mdl-layout__content">

                        {/* Main Section */}
                        {this.props.children}

                        {/* Footer */}
                        <footer className="xmt-mega-footer mdl-mega-footer">

                            <div className="mdl-mega-footer__top-section">

                                <div className="mdl-mega-footer__left-section">
                                    <button className="mdl-mega-footer__social-btn"></button>
                                    <button className="mdl-mega-footer__social-btn"></button>
                                    <button className="mdl-mega-footer__social-btn"></button>
                                </div>

                                <div className="mdl-mega-footer__right-section">
                                    <a className="mdl-typography--font-light" href="#!">Introduction</a>
                                    <a href="#!">Introduction</a>
                                    <a href="#!">Introduction</a>
                                </div>

                            </div>

                            <div className="mdl-mega-footer__middle-section">

                                <div className="mdl-mega-footer__drop-down-section">
                                    <input className="mdl-mega-footer__heading-checkbox" type="checkbox" defaultChecked/>
                                    <h1 className="mdl-mega-footer__heading">Features</h1>
                                    <ul className="mdl-mega-footer__link-list">
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Partners</a></li>
                                        <li><a href="#">Updates</a></li>
                                    </ul>
                                </div>

                                <div className="mdl-mega-footer__drop-down-section">
                                    <input className="mdl-mega-footer__heading-checkbox" type="checkbox" defaultChecked/>
                                    <h1 className="mdl-mega-footer__heading">Details</h1>
                                    <ul className="mdl-mega-footer__link-list">
                                        <li><a href="#">Specs</a></li>
                                        <li><a href="#">Tools</a></li>
                                        <li><a href="#">Resources</a></li>
                                    </ul>
                                </div>

                                <div className="mdl-mega-footer__drop-down-section">
                                    <input className="mdl-mega-footer__heading-checkbox" type="checkbox" defaultChecked/>
                                    <h1 className="mdl-mega-footer__heading">Technology</h1>
                                    <ul className="mdl-mega-footer__link-list">
                                        <li><a href="#">How it works</a></li>
                                        <li><a href="#">Patterns</a></li>
                                        <li><a href="#">Usage</a></li>
                                        <li><a href="#">Products</a></li>
                                        <li><a href="#">Contracts</a></li>
                                    </ul>
                                </div>

                                <div className="mdl-mega-footer__drop-down-section">
                                    <input className="mdl-mega-footer__heading-checkbox" type="checkbox" defaultChecked/>
                                    <h1 className="mdl-mega-footer__heading">FAQ</h1>
                                    <ul className="mdl-mega-footer__link-list">
                                        <li><a href="#">Questions</a></li>
                                        <li><a href="#">Answers</a></li>
                                        <li><a href="#">Contact us</a></li>
                                    </ul>
                                </div>

                            </div>

                            <div className="mdl-mega-footer__bottom-section">
                                <div className="mdl-logo">Title</div>
                                <ul className="mdl-mega-footer__link-list">
                                    <li><a href="#">Help</a></li>
                                    <li><a href="#">Privacy & Terms</a></li>
                                </ul>
                            </div>

                        </footer>

                    </section>
                
                </div>

            </div>
        )
    }

    public componentDidMount = () =>{
        componentHandler.upgradeDom();
    };

    public componentDidUpdate = () =>{
        // This upgrades all upgradable components (i.e. with 'mdl-js-*' className)
        componentHandler.upgradeDom();
    };
}

declare var componentHandler:any;
