import * as React from "react";

import {Header} from "./Header";

/**********************************************************************************************************************/
interface Props {
}
interface Stats {
}
export class Community extends React.Component<Props, Stats> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div className="community">

                {/* Main Header */}
                <Header/>

                {/* Article 或者 User 显示区域 */}
                {this.props.children}

            </div>
        )
    }
}
