import * as React from "react";
import * as $ from "jquery";

import * as userIcon from "media/header-user-icon-default.jpg";

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

interface Props extends ArticleCardInfo {

}
interface Stats {
}
export class ArticleCard extends React.Component<any, any> {
    constructor() {
        super();
    }

    public render() {
        return (
            <article className="article">
                <a href="#" className="title">牛逼牛逼超级牛逼</a>
                <div className="card">

                    <div className="top">
                        <div className="left">
                            <a href="#" className="author">
                                <img src={userIcon}/>
                                <span>RareGrass</span>
                            </a>
                            <div className="tag-group">
                                <i className="fa fa-tag"></i>
                                <a href="#" className="tag">web</a>
                            </div>
                        </div>

                        <div className="date">
                            2016 . 4 . 5
                        </div>
                    </div>
                    <div className="content">
                        亲爱的面团儿们： 首先，感谢所有关心我们、没事过来转一转的你。你的足迹是对我们这个小小的团队最大的认可。
                        随着签约仪式的正式结束，小馒头又完成了一次融资。伴随着融资的进行，我们也完成了艰难的搬家旅程。 之前的我们挤在一间小小的民房里，现在的我们搬到了一间复式的办公楼。短短半年，小馒...
                    </div>
                    <div className="bottom">
                        <a href="#" className="share">
                            <i className="fa fa-share"></i>
                            <span>0</span>人分享
                        </a>
                        <div className="icon-group">
                            <a href="#" className="icon">
                                <i className="fa fa-bookmark fa-lg"></i>
                                <span>1</span>
                            </a>
                            <a href="#" className="icon">
                                <i className="fa fa-heart fa-lg"></i>
                                <span>2</span>
                            </a>
                        </div>
                    </div>

                </div>
                <i className="divider"></i>
            </article>
        )
    }

    public componentDidMount = () => {
        let articleCard = $(".main-container .article-section article .card");

        $(articleCard).hover(function (event) {
            $(this).siblings(".title").addClass("hover")
        }, function (event) {
            $(this).siblings(".title").removeClass("hover")
        })
    };

    public componentDidUpdate = () => {
        let articleCard = $(".main-container .article-section article .card");

        $(articleCard).hover(function (event) {
            $(this).siblings(".title").addClass("hover")
        }, function (event) {
            $(this).siblings(".title").removeClass("hover")
        })
    };
}
