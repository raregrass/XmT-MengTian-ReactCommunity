import * as React from "react";

import {ArticleCardList} from "./ArticleCardList";

import * as XmTLogo from "media/aside-big-logo.png";

/**********************************************************************************************************************/
interface Props {
    location:{
        query:any;
    };
}
interface Stats {
    articleList:any[];
}
export class ArticlePage extends React.Component<Props, Stats> {
    constructor() {
        super();

        this.state = {
            articleList: []
        };
    }

    public render() {

        return (
            <div className="article-page">

                <section className="article-list-wrapper">

                    <div className="write-tip">
                        <div className="tip">今天你要与大家分享些什么呢？</div>
                        <a href="#" className="button">撰写文章</a>
                    </div>

                    <ArticleCardList articleList={this.state.articleList}/>

                </section>

                <aside className="aside">

                    <div className="tag-group">
                        <div className="label-container">
                            <label>特色标签</label>
                        </div>
                        <div className="tag-container">
                            <a href="#" className="tag">javascript</a>
                            <a href="#" className="tag">c语言</a>
                            <a href="#" className="tag">nodejs</a>
                            <a href="#" className="tag">IoT</a>
                            <a href="#" className="tag">typescript</a>
                            <a href="#" className="tag">nodejs</a>
                            <a href="#" className="tag">IoT</a>
                            <a href="#" className="tag">typescript</a>
                            <a href="#" className="tag">IoT</a>
                        </div>
                    </div>

                    <div className="tag-group">
                        <div className="label-container">
                            <label>我的兴趣</label>
                        </div>
                        <div className="tag-container">
                            <a href="#" className="tag">javascript</a>
                            <a href="#" className="tag">c语言</a>
                            <a href="#" className="tag">nodejs</a>
                            <a href="#" className="tag">IoT</a>
                            <a href="#" className="tag">typescript</a>
                            <a href="#" className="tag">nodejs</a>
                            <a href="#" className="tag">IoT</a>
                            <a href="#" className="tag">typescript</a>
                            <a href="#" className="tag">IoT</a>
                        </div>
                    </div>

                    <div className="tag-group">
                        <div className="label-container">
                            <label>热门文章</label>
                        </div>
                        <ul className="article-container">
                            <li className="article">
                                <a href="#" className="title">
                                    新版官网将正式弃用Angular 2框架
                                </a>
                                <div className="social-container">
                                    <a href="#" className="author">
                                        xiaomantou
                                    </a>
                                    <div className="social-icon-group">
                                        <a href="#" className="icon">
                                            <i className="fa fa-bookmark"></i>
                                            1
                                        </a>
                                        <a href="#" className="icon">
                                            <i className="fa fa-heart"></i>
                                            2
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="article">
                                <a href="#" className="title">
                                    javascriptasdfasdfsadfasdfasdfasdf
                                </a>
                                <div className="social-container">
                                    <a href="#" className="author">
                                        xiaomantou
                                    </a>
                                    <div className="social-icon-group">
                                        <a href="#" className="icon">
                                            <i className="fa fa-bookmark"></i>
                                            1
                                        </a>
                                        <a href="#" className="icon">
                                            <i className="fa fa-heart"></i>
                                            2
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="article">
                                <a href="#" className="title">
                                    新版官网将正式弃用Angular 2框架
                                </a>
                                <div className="social-container">
                                    <a href="#" className="author">
                                        xiaomantou
                                    </a>
                                    <div className="social-icon-group">
                                        <a href="#" className="icon">
                                            <i className="fa fa-bookmark"></i>
                                            1
                                        </a>
                                        <a href="#" className="icon">
                                            <i className="fa fa-heart"></i>
                                            2
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="article">
                                <a href="#" className="title">
                                    javascriptasdfasdfsadfasdfasdfasdf
                                </a>
                                <div className="social-container">
                                    <a href="#" className="author">
                                        xiaomantou
                                    </a>
                                    <div className="social-icon-group">
                                        <a href="#" className="icon">
                                            <i className="fa fa-bookmark"></i>
                                            1
                                        </a>
                                        <a href="#" className="icon">
                                            <i className="fa fa-heart"></i>
                                            2
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="article">
                                <a href="#" className="title">
                                    新版官网将正式弃用Angular 2框架
                                </a>
                                <div className="social-container">
                                    <a href="#" className="author">
                                        xiaomantou
                                    </a>
                                    <div className="social-icon-group">
                                        <a href="#" className="icon">
                                            <i className="fa fa-bookmark"></i>
                                            1
                                        </a>
                                        <a href="#" className="icon">
                                            <i className="fa fa-heart"></i>
                                            2
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="article">
                                <a href="#" className="title">
                                    javascriptasdfasdfsadfasdfasdfasdf
                                </a>
                                <div className="social-container">
                                    <a href="#" className="author">
                                        xiaomantou
                                    </a>
                                    <div className="social-icon-group">
                                        <a href="#" className="icon">
                                            <i className="fa fa-bookmark"></i>
                                            1
                                        </a>
                                        <a href="#" className="icon">
                                            <i className="fa fa-heart"></i>
                                            2
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="footer">
                        <div className="logo">
                            <img src={XmTLogo} width="100"/>
                        </div>
                        <p className="banner">
                            Make your choice, to be a HERO
                        </p>
                        <div className="icon-group">
                            <a href="#" className="icon">
                                <i className="fa fa-home fa-lg"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fa fa-weibo fa-lg"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fa fa-git fa-lg"></i>
                            </a>
                        </div>
                        <div className="email">
                            Email: <a href="#">contact@duguagua.com</a>
                        </div>
                        <div className="copyright">
                            <a href="http://www.miibeian.gov.cn/">粤ICP备15087531号</a> © 2015 XmT 保留所有权利
                        </div>
                    </div>

                </aside>

            </div>
        )
    }

    public componentDidMount = () => {
        let location = this.props.location;
        console.log(`Mount, query: ${JSON.stringify(location.query)}`);

        this.getArticleList();
    };

    public componentWillReceiveProps = (nextProps)=> {
        let location = nextProps.location;
        console.log(`ReceiveProps query: ${JSON.stringify(location.query)}`);

        this.getArticleList();
    };

    private getArticleList = (sort:"date"|"hot" = "date", filter:{
        tag?:string;
        official?:string;
    } = {})=> {

        let articleList = [];
        for (let i = 0; i < 10; i++) {
            articleList.push({
                id: i,
                author: "raregrass",
                date: new Date(),
                title: "牛逼牛逼牛逼" + i,
                tagGroup: ["web", "javascript", "IoT"],
                digest: "亲爱的面团儿们： 首先，感谢所有关心我们、没事过来转一转的你。你的足迹是对我们这个小小的团队最大的认可。 随着签约仪式的正式结束，小馒头又完成了一次融资。伴随着融资的进行，我们也完成了艰难的搬家旅程。 之前的我们挤在一间小小的民房里，现在的我们搬到了一间复式的办公楼。短短半年，小馒...",

                likeCount: i + 2,
                bookmarkCount: i + 2,
                shareCount: i + 2,
            });
        }

        this.setState(Object.assign(this.state, {
            articleList: articleList
        }));
    };

}