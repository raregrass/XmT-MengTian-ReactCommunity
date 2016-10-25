import * as React from "react";
import {Link} from "react-router";
import * as classNames from "classnames";

import * as userIcon from "media/xyx-icon.jpg";

/**********************************************************************************************************************/
export interface ArticleCardData {
    id:number;
    author:{
        id:string;
        icon:string;
    };
    tagGroup:string[];
    date:Date;
    title:string;
    likeCount:number;
    bookmarkCount:number;
    shareCount:number;
    digest:string;
}

interface Props extends ArticleCardData {
}
interface Stats {
    isCardHover?:boolean;
    isAuthorIconHover?:boolean;
}
export class ArticleCard extends React.Component<Props, Stats> {
    constructor(props) {
        super(props);

        /**
         * this.setState()进行shadow merge,因此不用每次都传入所有的属性
         */
        this.state = {
            isCardHover: false,
            isAuthorIconHover: false
        };
    }

    public render() {
        let articleInfo = this.props;

        let titleClassName = classNames({
            title: true,
            hover: this.state.isCardHover
        });

        return (
            <article className="article-card">

                <Link to={"/article/id/" + articleInfo.id} className={titleClassName}>{articleInfo.title}</Link>

                <div className="card"
                     onMouseEnter={()=>{this.setState({isCardHover: true});}}
                     onMouseLeave={()=>{this.setState({isCardHover: false});}}>

                    <div className="top">
                        <div className="left">
                            <Link to={"/user/id/"+ articleInfo.author.id} className="author">
                                <img src={userIcon}/>
                                <span>{articleInfo.author}</span>
                            </Link>
                            <div className="tag-group">
                                <i className="fa fa-tag"></i>
                                {articleInfo.tagGroup.map((tag)=> {
                                    return (
                                        <Link key={tag}
                                              to={"/article/list?sort=new&tag="+ tag}
                                              className="tag">
                                            {tag}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="date">
                            {articleInfo.date.getFullYear()} .  {articleInfo.date.getMonth()} .  {articleInfo.date.getDate()}
                        </div>
                    </div>
                    <div className="content">
                        {articleInfo.digest}
                    </div>
                    <div className="bottom">
                        <a href="#" className="share">
                            <i className="fa fa-share"></i>
                            <span>{articleInfo.shareCount}</span>人分享
                        </a>
                        <div className="icon-group">
                            <a href="#" className="icon">
                                <i className="fa fa-bookmark fa-lg"></i>
                                <span>{articleInfo.bookmarkCount}</span>
                            </a>
                            <a href="#" className="icon">
                                <i className="fa fa-heart fa-lg"></i>
                                <span>{articleInfo.likeCount}</span>
                            </a>
                        </div>
                    </div>

                </div>

                <i className="divider"></i>

            </article>
        )
    }
}
