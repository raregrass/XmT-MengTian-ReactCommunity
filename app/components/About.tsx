import * as React from "react";
import {Component, PropTypes} from "react";

/*************************************************************************/
interface Props{
}
interface Stats{
    footer:string;
}
export class About extends Component<Props, Stats>{
    constructor(){
        super();

        this.state = {
            footer: "mega"
        };
    }

    public render(){
        return (
            <div className="xmt-about">

                {/* First section */}
                <div className="xmt-first-section mdl-typography--text-center">
                    <div className="xmt-logo-font xmt-main-slogan">
                        小馒头 —— 你的机器人世界
                    </div>
                    <div className="xmt-logo-font xmt-sub-slogan">
                        在这里，只管去创造，就像小时候的你一样
                    </div>
                    <div className="xmt-logo-font xmt-create-world">
                        <a href=""> 创造属于你自己的机器人世界 </a>
                    </div>

                    <a href="#screens">
                        <button className="xmt-fab mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect">
                            <i className="material-icons">expand_more</i>
                        </button>
                    </a>
                </div>

                {/* Second section */}
                <div className="xmt-second-section mdl-typography--text-center">
                    <a name="screens"></a>
                    <div className="xmt-slogan mdl-typography--display-1-color-contrast">
                        这些作品都是由像你一样的天才设计而来
                    </div>
                    <div className="xmt-showcases">
                        
                        {[0,1,2,3,4].map(()=>{
                            return (
                            <div className="xmt-showcase">
                                <a className="xmt-image-link" href="#!">
                                    <img className="xmt-image" src={null}/>
                                </a>
                                <a className="xmt-link mdl-typography--font-regular mdl-typography--text-uppercase" href="">
                                    Android Wear
                                </a>
                            </div>
                                );
                            })}

                    </div>
                </div>

                {/* Footer */}
                {this.getFooter()}

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

    private getFooter = ()=>{
        if(this.state.footer === "mega"){
            return (
                <footer className="xmt-mega-footer mdl-mega-footer">

                    <div className="mdl-mega-footer__top-section">

                        <div className="mdl-mega-footer__left-section">
                            <button className="mdl-mega-footer__social-btn"></button>
                            <button className="mdl-mega-footer__social-btn"></button>
                            <button className="mdl-mega-footer__social-btn"
                                    onClick={()=>{this.setState({footer: "mini"})}}
                            >
                                关闭详情
                            </button>
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
            )
        }

        return (
            <footer className="xmt-mini-footer mdl-mini-footer">

                <div className="mdl-mini-footer__left-section">
                    <div className="mdl-logo">
                        More Information
                    </div>
                    <ul className="mdl-mini-footer__link-list">
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Privacy and Terms</a></li>
                        <li><a href="#">User Agreement</a></li>
                        <li>
                            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                                    onClick={()=>{this.setState({footer: "mega"})}}
                            >
                                查看更多
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="mdl-mini-footer__right-section">
                    <button className="mdl-mini-footer__social-btn"></button>
                    <button className="mdl-mini-footer__social-btn"></button>
                    <button className="mdl-mini-footer__social-btn"></button>
                </div>

            </footer>
        );
    }
}

declare var componentHandler:any;
