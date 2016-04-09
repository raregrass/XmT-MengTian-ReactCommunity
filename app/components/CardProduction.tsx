import * as React from "react";
import {Component, PropTypes} from "react";

const image = require("../assets/images/more-from-1.png");

/*************************************************************************/
interface Props{
}
interface Stats{
}
export class CardProduction extends Component<Props, Stats>{
    constructor(){
        super();
    }
    
    public render(){
        return (
            <div className="xmt-card-production mdl-cell mdl-card mdl-shadow--4dp">
                
                <div className="mdl-card__media">
                    <img src={image}/>
                </div>
                
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Welcome</h2>
                </div>
                
                <div className="mdl-card__supporting-text">
                    <span className="mdl-typography--font-light mdl-typography--subhead">
                        Four tips to make your switch to Android quick and easy
                    </span>
                </div>
                
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        Get Started
                    </a>
                    <div className="mdl-layout-spacer"></div>
                    <a className="mdl-button mdl-button--icon mdl-button--colored">
                        <i className="material-icons">favorite</i>
                    </a>
                    <a className="mdl-button mdl-button--icon mdl-button--colored">
                        <i className="material-icons">share</i>
                    </a>
                </div>
            
            </div>
        )
    }
    
    private componentDidMount = ()=>{
        componentHandler.upgradeDom();
    };
    
    private componentDidUpdate = () =>{
        // This upgrades all upgradable components (i.e. with 'mdl-js-*' className)
        componentHandler.upgradeDom();
    }
}

declare var componentHandler:any;