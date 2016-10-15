import * as React from "react";

import {Aside} from "./Aside";

/**********************************************************************************************************************/
interface Props {
}
interface Stats {
}
export class ArticlePage extends React.Component<Props, Stats> {
    constructor() {
        super();
    }

    public render() {
        return (
            <div className="">

                {/* 撰写文章提示框 */}
                <div className="write-article-bar">
                </div>

                {/* Article Cards显示区域 */}
                {this.props.children}

                {/* 侧边栏 */}
                <Aside/>

            </div>
        )
    }

    public componentDidMount = () => {
    };

    public componentDidUpdate = () => {
        // This upgrades all upgradable components (i.e. with 'mdl-js-*' className)
    };
}
