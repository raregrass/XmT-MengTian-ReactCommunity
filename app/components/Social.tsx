import * as React from "react";
import {Component, PropTypes} from "react";

import {ArticleCard} from "./index";

/*************************************************************************/
interface Props{
}
interface Stats{
}
export class Social extends Component<Props, Stats>{
    public render(){
        return (
            <div className="xmt-social">
                
                { [0, 1, 2, 3, 4, 5, 6, 7].map(()=>{
                    return (
                        <ArticleCard/>
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
