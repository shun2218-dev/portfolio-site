import Link from 'next/link'
import { FC, memo } from 'react'
import styles from '~/styles/pon-design/News.module.scss'
import { NewsInfo } from '~/types/pon-design'

type Props = {
  news: NewsInfo
}

const NewsItemMemo: FC<Props> = ({ news }) => {
  return (
    <li className={styles['c-news__list-item']}>
      <Link href={`/pon-design/news/${news.news_id}`} className={styles['c-news__link']}>
        <div className={styles['c-news__header']}>
          <time className={styles['c-news__date']} dateTime={`${news.dateTime.year}-${news.dateTime.month}-${news.dateTime.day}`}>
            {`${news.dateTime.year}.${news.dateTime.month}.${news.dateTime.day}`}
          </time>
          <div className={styles['c-news__label']}>
            <span className={styles['c-news__label-text']}>{news.label}</span>
          </div>
        </div>
        <h3 className={styles['c-news__article-title']}>{news.title}</h3>
      </Link>
    </li>
  )
}

const NewsItem = memo(NewsItemMemo)
export { NewsItem }
