import { NewsInfo } from '~/types/pon-design'
import { FC, memo, useCallback, useEffect, useState } from 'react'
import styles from '~/styles/pon-design/News.module.scss'
import { NewsItem } from '~/components/pon-design/NewsItem'
import { createBreakpoint } from 'react-use'
import Spinner from '../Spinner'

type Props = {
  articles: NewsInfo[]
  isValidating: boolean
}

const defaultNews: NewsInfo = {
  dateTime: { year: '2030', month: '02', day: '01' },
  label: 'お知らせ',
  title: 'テキストが入りますテキストが入りますテキストが入りますテキストが入ります',
  news_id: '',
}

const NewsListMemo: FC<Props> = ({ articles, isValidating }) => {
  const [newsList, setNewsList] = useState<NewsInfo[]>([...articles])
  const generateNews = useCallback(
    (news: NewsInfo[]) => {
      const pageLimit = 20
      const loopCounter = pageLimit - news.length
      if (!isValidating) {
        for (let i = 0; i < loopCounter; i++) {
          defaultNews.news_id = `defaultNews_${i}`
          setNewsList((prev) => [...prev, defaultNews])
        }
      }
    },
    [isValidating]
  )

  useEffect(() => {
    generateNews(articles)
  }, [articles, generateNews])
  return (
    <ul className={styles['c-news__list']}>
      {isValidating ? (
        <Spinner />
      ) : (
        <>
          {newsList.map((news, index) => {
            const newsId = `${news.label}_${index}`
            defaultNews.news_id = newsId
            return <NewsItem news={news} key={newsId} />
          })}
        </>
      )}
    </ul>
  )
}

const NewsList = memo(NewsListMemo)
export { NewsList }
