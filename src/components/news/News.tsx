import { useEffect, useState } from 'react'
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
    <div className='bg-[#e7cfad] mx-16 rounded-2xl h-96'>
        <h1 className='p-8 font-sans text-4xl font-bold text-center'>Current News Headlines</h1>
        {news.slice(0,5).map((article, key: number) => {
            return (
                <NewsItem key={key} title={article['title']} link={article['url']} />
            )
        })}
    </div>
  )
}

export default News