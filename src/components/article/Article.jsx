import React from 'react'
import './article.css';


const Article = ({ imgUrl, date, title }) => {
    return (
        <div className='portfolio-container_article'>
            <div className='portfolio-container_article-image'>
                <img src={imgUrl} alt="portfolio" />
            </div>
            <div className='portfolio-container_article-content'>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>See full project</p>
            </div>
        </div>
    )
}

export default Article
