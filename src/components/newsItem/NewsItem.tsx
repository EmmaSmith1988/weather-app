import './NewsItem.css'
type Props = {
    title: string,
    link: string
}

const NewsItem = ({title, link}: Props) => {
  return (
    <div className='news-item'>
        <h4 className='news-title'>{title}</h4>
        <a href={link} className="news-link">{link}</a>
    </div>
  )
}

export default NewsItem