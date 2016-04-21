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
            <div className="xmt-community mdl-grid">


                <div className="xmt-swiper-list mdl-cell mdl-cell--4-col-desktop mdl-cell--8-col-tablet mdl-cell--hide-phone">
                    <img src={smallImage}/>
                    <img src={smallImage}/>
                    <img src={smallImage}/>
                </div>

                <div className="xmt-swiper-big mdl-cell mdl-cell--8-col-desktop mdl-cell--8-col-tablet ">
                    {this.getSwipe(bigImage)}
                </div>


                <div className="mdl-grid mdl-cell mdl-cell--12-col mdl-cell--4-col-tablet mdl-card mdl-shadow--4dp">
                    <div className="mdl-card__media mdl-cell mdl-cell--12-col-tablet">
                        <img className="article-image" src=" images/example-blog01.jpg" border="0" alt=""/>
                    </div>
                    <div className="mdl-cell mdl-cell--8-col">
                        <h2 className="mdl-card__title-text">Velit anim eiusmod labore sit amet</h2>
                        <div className="mdl-card__supporting-text padding-top">
                            <span>Posted 2 days ago</span>
                            <div id="tt1" className=" icon material-icons portfolio-share-btn">share</div>
                            <div className="mdl-tooltip" htmlFor="tt1">
                                Share via social media
                            </div>
                        </div>
                        <div className="mdl-card__supporting-text no-left-padding">
                            <p>Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Qui ullamco consectetur aute fugiat officia ullamco proident Lorem ad irure. Sint eu ut consectetur ut esse veniam laboris adipisicing aliquip minim anim labore commodo.</p>
                            <span>Category: <a href="#">Latest</a></span>
                        </div>
                    </div>
                </div>
                <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-card mdl-shadow--4dp">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">Voluptate voluptate</h2>
                    </div>
                    <div className="mdl-card__media">
                        <a href="#"> <img className="article-image" src=" images/example-blog02.jpg" border="0" alt=""/></a>
                    </div>
                    <div className="mdl-card__supporting-text no-bottom-padding">
                        <span>Posted 2 days ago</span>
                        <div id="tt2" className=" icon material-icons portfolio-share-btn">share</div>
                        <div className="mdl-tooltip" htmlFor="tt2">
                            Share via social media
                        </div>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <p>Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in.</p>
                    </div>
                </div>
                <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-card mdl-card mdl-shadow--4dp portfolio-blog-card-full-bg  ">
                    <div className="mdl-card__title mdl-card--expand "></div>
                    <div className="mdl-card__actions">
                        <span className="demo-card-image__filename">Pamukkale.jpg</span>
                    </div>
                </div>
                <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-card mdl-shadow--4dp ">
                    <div className="mdl-card__media">
                        <a href="#"> <img className="article-image" src=" images/example-blog04.jpg" border="0" alt=""/></a>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <small>Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit.</small>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <p>Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Qui ullamco consectetur aute fugiat officia ullamco proident Lorem ad irure. Sint eu ut consectetur ut esse veniam.</p>
                    </div>
                </div>
                <div className="demo-card-event mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-card mdl-card mdl-shadow--4dp portfolio-blog-card-event-bg mdl-color-text--white">
                    <div className="mdl-card__title mdl-card--expand">
                        <h4 className="mdl-color-text--white">
                            Conference event:<br/>
                            May 24, 2016<br/>
                            7-11pm
                        </h4>
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-color-text--white">
                            Add to Calendar
                        </a>
                        <div className="mdl-layout-spacer"></div>
                        <i className="material-icons ">event</i>
                    </div>
                </div>
                <div className="mdl-cell mdl-cell--5-col mdl-cell--4-col-tablet mdl-card  mdl-card mdl-shadow--4dp">
                    <div className="mdl-card__title mdl-card--expand portfolio-blog-card-strip-bg mdl-color-text--white">
                        <h2 className="mdl-card__title-text">adipiscing</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent">
                            View Updates
                        </a>
                    </div>
                </div>
                <div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-card  mdl-card mdl-shadow--4dp portfolio-blog-card-compact">
                    <div className="mdl-card__media">
                        <img className="article-image" src=" images/example-blog07.jpg" border="0" alt=""/>
                    </div>
                    <div className="mdl-card__title ">
                        <h2 className="mdl-card__title-text">Loren</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent">
                            View Updates
                        </a>
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


