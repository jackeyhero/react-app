import React ,{Component} from 'react'
import './section.css'


class ArticleLi extends Component{
    render(){
        return(
            <div className="articleLi">
                <div className="articleName">{this.props.articleName}</div>
                <div className="articleDate">发布时间：{' '}{this.props.articleDate}</div>
                <div className="articleAuthor">作者：{' '}{this.props.articleAuthor}</div>
            </div>
        )
    }
}


class ArticleList extends Component{
    render(){
        let articleLi=[]
        this.props.article.forEach((article)=>{
            articleLi.push(<ArticleLi
                            articleName={article.name}
                            articleAuthor={article.author}
                            articleDate={article.date}/>)
        })
        return (
            <div className="articleList">
                {articleLi}
            </div>
        )
    }
}

export default ArticleList