import { useEffect, useState } from 'react'
import './News.css'
import axios from 'axios'
import NewsItem from '../newsItem/NewsItem'

function News() {
    const [news, setNews] = useState([])

    useEffect(() => {
        const getNews = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
            setNews(response.data.articles)
        }
        getNews()
        
    }, [])
    

  return (
    <div className='news'>
        <h1>Current News Headlines</h1>
        {news.slice(0,5).map(article => {
            return (
                <NewsItem title={article['title']} link={article['url']} />
            )
        })}
    </div>
  )
}

export default News