import * as React from "react";
import * as logo from "media/logo.svg";

export class Header extends React.Component<any,any> {
    public render() {
        return (
            <div>
                <h1> Hello </h1>
                <img src={logo}/>
            </div>
        );
    }
}
