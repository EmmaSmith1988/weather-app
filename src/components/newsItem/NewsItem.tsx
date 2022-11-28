import './NewsItem.css'
type Props = {
    title: string,
    link: string,
    key: number
}

const NewsItem = ({title, link, key}: Props) => {
  return (
    <div key={key} className='px-8 pb-4'>
        
        <a href={link}><span className='pr-4 lg:pr-8 text-purple-800'>Click to read -&gt;</span><span>{title}</span></a>
    </div>
  )
}

export default NewsItem