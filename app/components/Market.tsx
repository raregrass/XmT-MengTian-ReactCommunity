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

                { [0, 1, 2, 3, 4, 5, 6, 7].map((key)=>{
                    return (
                        <CardProduction key={key}/>
                    );
                }) }

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
