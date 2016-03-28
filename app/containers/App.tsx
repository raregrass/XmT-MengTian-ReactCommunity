import * as React from "react";
import {Component, PropTypes} from "react";

import {connect} from "react-redux";

/*************************************************************************/

interface Props {
    height: number;
    width: number;
    path: string;
}
interface Stats {
}
class App extends Component<Props, Stats>{
    public render() {

        return (
            <div>
                <h1>This is App!</h1>

                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps(state: { [x: string]: any }) {
    const {environment, navigator} = state;

    return {
        height: environment.height,
        width: environment.width,
        path: navigator.route.path,
    }
}

export const AppContainer = connect(mapStateToProps)(App);
