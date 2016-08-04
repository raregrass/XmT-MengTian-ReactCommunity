import * as React from "react";

interface Props {

}
interface Stats {

}

class App extends React.Component<Props, Stats> {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src="assets/images/logo.svg" className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
