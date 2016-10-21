import * as React from 'react'

import {ArticleCard} from "./ArticleCard";

/**********************************************************************************************************************/
interface Props {
    //articleCardList:ArticleCardInfo[]
}
interface Stats {
}
export class ArticleCardList extends React.Component<any, any> {
    constructor() {
        super();
    }

    public render() {
        let articleCardList = this.props.route.articleCardList.map((articleCard)=> (
            <ArticleCard key={articleCard.id}
        author={articleCard.author}/>
    )
    );

        return (
            <section className="xmt-app">
                {articleCardList}
                </section>
        )
    }

}
