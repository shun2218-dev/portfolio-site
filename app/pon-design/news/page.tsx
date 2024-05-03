'use client'
import { useEffect, useState } from 'react'

import Link from 'next/link'
import { NewsList } from '~/components/pon-design/NewsList'
import { NewsInfo } from '~/types/pon-design'
import styles from '~/styles/pon-design/NewsPage.module.scss'
import Spinner from '~/components/Spinner'
import useSWR from 'swr'
import { PageLayout } from '~/components/pon-design/PageLayout'
import { useSearchParam } from 'react-use'
import { notFound } from 'next/navigation'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = (await res.json()) as NewsInfo[]
  return data
}

const NewsListPage = () => {
  const [newsInfo, setNewsInfo] = useState<NewsInfo[]>([])
  const [currentPage, setCurrentPage] = useState<number>(0)
  const searchParam = useSearchParam('page')
  const { mutate, data, error, isLoading, isValidating } = useSWR('/api/pon-design/news', fetcher)

  useEffect(() => {
    if (data && !isLoading) setNewsInfo([...data])
    setCurrentPage(parseInt(searchParam ?? '0'))
  }, [data, isLoading])

  if (parseInt(searchParam ?? '0') > 3 || parseInt(searchParam ?? '0') < 0) {
    notFound()
  }
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
              <li onClick={() => setCurrentPage(0)}>
                <Link href="/pon-design/news/?page=0" className={styles['p-news-article__pager-button']} data-is-active={currentPage === 0} id="news-pager__1" aria-label="News pager page 1">
                  1
                </Link>
              </li>
              <li onClick={() => setCurrentPage(1)}>
                <Link href="/pon-design/news/?page=1" className={styles['p-news-article__pager-button']} data-is-active={currentPage === 1} id="news-pager__2" aria-label="News pager page 2">
                  2
                </Link>
              </li>
              <li onClick={() => setCurrentPage(2)}>
                <Link href="/pon-design/news/?page=2" className={styles['p-news-article__pager-button']} data-is-active={currentPage === 2} id="news-pager__3" aria-label="News pager page 3">
                  3
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </PageLayout>
  )
}

export default NewsListPage
