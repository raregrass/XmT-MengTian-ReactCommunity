import * as React from "react";

import {ArticleCard, ArticleCardData} from "./ArticleCard";

/**********************************************************************************************************************/
interface Props {
    articleList:ArticleCardData[];
}
interface Stats {
}
export class ArticleCardList extends React.Component<Props, Stats> {
    constructor() {
        super();
    }

    public render() {
        let articleCardList = this.props.articleList.map((article)=> {
            return <ArticleCard key={article.id}
                                id={article.id}
                                date={article.date}
                                tagGroup={article.tagGroup}
                                title={article.title}
                                author={article.author}
                                shareCount={article.shareCount}
                                likeCount={article.likeCount}
                                bookmarkCount={article.bookmarkCount}
                                digest={article.digest}/>
        });

        return (
            <div className="article-card-list">

                {articleCardList}

            </div>
        )
    }
}
