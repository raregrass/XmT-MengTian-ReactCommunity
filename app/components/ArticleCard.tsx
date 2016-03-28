import * as React from "react";
import {Component, PropTypes} from "react";

import * as image from "../stylesheets/images/more-from-2.png";

/*************************************************************************/
interface Props{
}
interface Stats{
}
export class ArticleCard extends Component<Props, Stats>{
    constructor(){
        super();
    }

    public render(){
        return (
            <div key={Date.now()} className="xmt-article-card mdl-card mdl-shadow--4dp">

                <div className="xmt-top mdl-card__actions mdl-card--border">
                    <div className="mdl-list">
                        <div className="mdl-list__item">
                            <span className="mdl-list__item-primary-content">
                              <i className="material-icons mdl-list__item-avatar">person</i>
                              <span>王晓飞</span>
                            </span>
                        </div>
                    </div>
                    <div className="mdl-layout-spacer"></div>
                    <span className="xmt-time">
                        2016.3.27
                    </span>
                </div>

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

                <div className="xmt-bottom mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        Get Started
                    </a>
                    <div className="mdl-layout-spacer"></div>
                    <button className="mdl-button mdl-button--icon mdl-button--colored">
                        <i className="material-icons">bookmark_border</i>
                    </button>
                    <span className="xmt-count">123</span>
                    <span className="mdl-button mdl-button--icon mdl-button--colored">
                        <i className="material-icons">favorite_border</i>
                    </span>
                    <span className="xmt-count">123</span>
                    <span className="mdl-button mdl-button--icon mdl-button--colored">
                        <i className="material-icons">share_border</i>
                    </span>
                    <span className="xmt-count">123</span>
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
    }
}

declare var componentHandler:any;