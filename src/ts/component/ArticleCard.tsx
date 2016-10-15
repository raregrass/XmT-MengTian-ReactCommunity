import * as React from "react";

/**********************************************************************************************************************/
export interface ArticleCardInfo {
    author:string;
    tag:string[];
    date:Date;
    likeCount:number;
    favoriteCount:number;
    shareCount:number;
    digest:string;
}

interface Props extends ArticleCardInfo{

}
interface Stats {
}
export class ArticleCard extends React.Component<any, any> {
    constructor() {
        super();
    }

    public render() {
        return (
            <article className="article-card">

            </article>
        )
    }
}
