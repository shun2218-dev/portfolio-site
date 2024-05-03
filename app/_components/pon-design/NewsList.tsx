import { NewsInfo } from '~/types/pon-design'
import { FC, memo } from 'react'
import styles from '~/styles/pon-design/News.module.scss'
import { NewsItem } from '~/components/pon-design/NewsItem'
import Spinner from '../Spinner'

type Props = {
  articles: NewsInfo[]
  isValidating: boolean
}

const NewsListMemo: FC<Props> = ({ articles, isValidating }) => {
  return (
    <ul className={styles['c-news__list']}>
      {isValidating && articles.length === 0 ? (
        <Spinner />
      ) : (
        <>
          {articles.map((news) => (
            <NewsItem news={news} key={news.id} />
          ))}
        </>
      )}
    </ul>
  )
}

const NewsList = memo(NewsListMemo)
export { NewsList }
