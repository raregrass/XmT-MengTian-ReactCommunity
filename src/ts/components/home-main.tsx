import * as React from "react";
import * as logo from "imagesRoot/logo.svg";

interface Props {
    title: string;
}
interface Stats {
}
export class App extends React.Component<Props, Stats> {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

console.log("This is home and index");
console.log(process.versions);
