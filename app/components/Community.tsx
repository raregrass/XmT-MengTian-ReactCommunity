import * as React from "react";
import {Component, PropTypes} from "react";

import {CardArticle} from "./index";

const bigImage = require("../assets/images/l1.png");
const smallImage = require("../assets/images/s2.png");

/*************************************************************************/
interface Props{
}
interface Stats{
}
export class Community extends Component<Props, Stats>{
    public render(){
        return (
            <div className="xmt-community">

                <div className="mdl-grid">

                    <div className="xmt-swiper-list mdl-cell mdl-cell--3-col-desktop mdl-cell--hide-phone">
                        {this.getSwiper(smallImage)}
                        {this.getSwiper(smallImage)}
                    </div>

                    <div className="xmt-swiper-big mdl-cell mdl-cell--9-col-desktop mdl-cell--stretch">
                        {this.getSwiper(bigImage)}
                    </div>

                </div>

                <div>

                    { [0, 1, 2, 3, 4, 5, 6, 7].map((key)=>{
                        return (
                        <CardArticle key={key}/>
                            )
                        }) }

                </div>

            </div>
        );
    }

    public getSwiper = (image:any)=>{
        return (
            <a href="#!"><img src={image}/></a>

            /*<div className="mdl-card mdl-shadow--4dp">
                <div className="mdl-card__media">
                    <div ref="swiper" className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide"><img src={image}/></div>
                            <div className="swiper-slide"><img src={image}/></div>
                            <div className="swiper-slide"><img src={image}/></div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>*/
        );
    };

    public componentDidMount = ()=>{
        // Init swiper library.
        let mySwiper = new Swiper(this.refs["swiper"] as Element, {
            // Optional parameters
            loop: true,

            // If we need pagination
            pagination: '.swiper-pagination'
        });
    };

    public componentDidUpdate = () =>{
        // This upgrades all upgradable components (i.e. with 'mdl-js-*' className)
        componentHandler.upgradeDom();
    }
}

declare var componentHandler:any;


