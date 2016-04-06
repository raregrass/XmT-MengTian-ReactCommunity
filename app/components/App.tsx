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
