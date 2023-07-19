'use client'
import { useEffect, useState } from 'react'

import { NewsList } from '~/components/pon-design/NewsList'
import { NewsInfo } from '~/types/pon-design'
import styles from '~/styles/pon-design/NewsPage.module.scss'
import Spinner from '~/components/Spinner'
import useSWR from 'swr'
import { PageLayout } from '~/components/pon-design/PageLayout'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = (await res.json()) as NewsInfo[]
  return data
}

const NewsListPage = () => {
  const [newsInfo, setNewsInfo] = useState<NewsInfo[]>([])
  const { mutate, data, error, isLoading, isValidating } = useSWR('/api/pon-design/news', fetcher)

  useEffect(() => {
    if (data && !isLoading) setNewsInfo([...data])
  }, [data, isLoading])
  return (
    <PageLayout title={'NEWS'} subTitle={'お知らせ'}>
      <article className={styles['p-news-article']}>
        <div className={styles['p-news-article__inner']}>
          {/* <Skelton /> */}
          {!isLoading && newsInfo.length > 0 ? <NewsList articles={newsInfo} isValidating={isValidating} /> : <Spinner />}
          {error && (
            <div>
              <p>Failed to get news</p>
              <button onClick={() => mutate()}>Retry</button>
            </div>
          )}
          <div className={styles['p-news-article__pager']}>
            <ul className={styles['p-news-article__pager-list']}>
              <li>
                <button className={styles['p-news-article__pager-button']} data-is-active="true" id="news-pager__1" aria-label="News pager page 1">
                  1
                </button>
              </li>
              <li>
                <button className={styles['p-news-article__pager-button']} id="news-pager__2" aria-label="News pager page 2">
                  2
                </button>
              </li>
              <li>
                <button className={styles['p-news-article__pager-button']} id="news-pager__3" aria-label="News pager page 3">
                  3
                </button>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </PageLayout>
  )
}

export default NewsListPage
