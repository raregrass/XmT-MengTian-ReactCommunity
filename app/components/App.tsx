import * as React from "react";
import {Component, PropTypes} from "react";

import {Link, IndexLink} from "react-router";

import * as logo from "../stylesheets/images/android-logo.png";

/*************************************************************************/
interface Props{
}
interface Stats{
}
export class App extends Component<Props, Stats>{
    constructor(){
        super();
        
        this.state = {};
    }
    
    public render(){
        return (
            <div className="xmt-app">
                {/* Wrap the layout used by MDL for preventing the errors from react */}
                
                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                    
                    {/* Main Header */}
                    <header className="xmt-main-header mdl-layout__header mdl-layout__header-row">
                        
                        {/* Logo */}
                        <img className="xmt-header__logo" src={logo}/>
                        
                        {/* Add spacer to align navigation menu to the right */}
                        <div className="mdl-layout-spacer"></div>
                        
                        {/* Navigation. We hide it in small screens. */}
                        <nav className="mdl-navigation mdl-layout--large-screen-only">
                            <IndexLink to="/">
                                <span className="mdl-navigation__link">社 区</span>
                            </IndexLink>
                            <Link to="/market">
                                <span className="mdl-navigation__link">淘 器</span>
                            </Link>
                            <Link to="/world">
                                <span className="mdl-navigation__link">世 界</span>
                            </Link>
                            <Link to="/education">
                                <span className="mdl-navigation__link">教 育</span>
                            </Link>
                            <Link to="/about">
                                <span className="mdl-navigation__link">关 于</span>
                            </Link>
                        </nav>
                    
                    </header>
                    
                    {/* Main Drawer */}
                    <aside className="xmt-main-drawer mdl-layout__drawer">
                        
                        {/* Title */}
                        <span className="mdl-layout__title">小馒头</span>
                        
                        {/* Navigation menu list */}
                        <nav className="mdl-navigation">
                            <IndexLink to="/">
                                <span className="mdl-navigation__link">社 区</span>
                            </IndexLink>
                            <Link to="/market">
                                <span className="mdl-navigation__link">淘 器</span>
                            </Link>
                            <Link to="/world">
                                <span className="mdl-navigation__link">世 界</span>
                            </Link>
                            <Link to="/education">
                                <span className="mdl-navigation__link">教 育</span>
                            </Link>
                            <Link to="/about">
                                <span className="mdl-navigation__link">关 于</span>
                            </Link>
                        </nav>
                    
                    </aside>
                    
                    {/* Main Section */}
                    <section className="xmt-main-content mdl-layout__content">
                        
                        {/* Main Section */}
                        {this.props.children}
                    
                    </section>
                
                </div>
            
            </div>
        )
    }
    
    private componentDidUpdate = () =>{
        // This upgrades all upgradable components (i.e. with 'mdl-js-*' className)
        componentHandler.upgradeDom();
        
        // We could have done this manually for each component
        /*
         * var submitButton = this.refs.submit.getDOMNode();
         * componentHandler.upgradeElement(submitButton, "MaterialButton");
         * componentHandler.upgradeElement(submitButton, "MaterialRipple");
         */
    };
}

declare var componentHandler:any;
