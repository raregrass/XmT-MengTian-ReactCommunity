import * as React from "react";
import {Component, PropTypes} from "react";

/*************************************************************************/
interface Props{
}
interface Stats{
}
export class Swipe extends Component<Props, Stats>{
    constructor(){
        super();
    }

    public render(){
        return (
            <div ref="swiper" className="swiper-container">
                <div className="swiper-wrapper">
                    {React.Children.map(
                        this.props.children,
                        (child)=>{return (
                        <div className="swiper-slide">{child}</div>
                            );}
                        )}
                </div>
                <div className="swiper-pagination"></div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        )
    }

    private swiper:any;

    public componentDidMount = () =>{
        // This upgrades all upgradable components (i.e. with 'mdl-js-*' className)
        componentHandler.upgradeDom();

        // Init swiper library.
        this.swiper = new Swiper(this.refs["swiper"] as Element, {
            // TODO: Will cause react error, waiting for clear on how to solve this.
            //loop: true,

            grabCursor: true,

            pagination: '.swiper-pagination',

            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
        });
    };

    public componentDidUpdate = () =>{
        // This upgrades all upgradable components (i.e. with 'mdl-js-*' className)
        componentHandler.upgradeDom();

        // Update the swiper.
        this.swiper.update();
    };
}

declare var componentHandler:any;
declare var Swiper:any;
