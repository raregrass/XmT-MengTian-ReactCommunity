import * as React from "react";
import {Component, PropTypes} from "react";

import {CardProduction} from "./index";

/*************************************************************************/
interface Props{
}
interface Stats{
}
export class Market extends Component<Props, Stats>{
    public render(){
        return (
            <div className="xmt-market mdl-grid">
                
                    { [0,1,2,3,4,5,6,7].map(()=>{
                        return (
                        <CardProduction/>
                            )
                        }) }

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
