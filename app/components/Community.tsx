import * as React from "react";
import {Component, PropTypes} from "react";

import {CardArticle, Swipe} from "./index";

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

                    <div className="xmt-swiper-big mdl-cell mdl-cell--8-col-desktop mdl-cell--stretch mdl-cell--8-col-tablet">
                        {this.getSwipe(bigImage)}
                    </div>

                    <div className="xmt-swiper-list mdl-cell mdl-cell--4-col-desktop mdl-cell--8-col-tablet mdl-cell--hide-phone">
                        {this.getSwipe(smallImage)}
                        {this.getSwipe(smallImage)}
                        {this.getSwipe(smallImage)}
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

    public getSwipe = (image:any)=>{
        return (
            <div className="mdl-card mdl-shadow--4dp">
                <div className="mdl-card__media">
                    <Swipe>
                        <img src={image}/>
                        <img src={image}/>
                        <img src={image}/>
                    </Swipe>
                </div>
            </div>
        );
    };

    public componentDidMount = ()=>{
        componentHandler.upgradeDom();
    };

    public componentDidUpdate = () =>{
        componentHandler.upgradeDom();
    }
}

declare var componentHandler:any;


