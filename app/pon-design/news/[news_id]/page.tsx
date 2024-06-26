'use client'
import styles from '~/styles/pon-design/NewsDetail.module.scss'
import type { NewsInfo } from '~/types/pon-design'
import { useEffect, useState } from 'react'
import { NewsDetail } from '~/components/pon-design/NewsDetail'
import { PageLayout } from '~/components/pon-design/PageLayout'
import Spinner from '~/components/Spinner'
import { notFound, useParams } from 'next/navigation'
import useSWR from 'swr'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = (await res.json()) as NewsInfo
  return data
}

const NewsDetailPage = () => {
  const params = useParams()
  const [newsDatailData, setNewsDatailData] = useState<NewsInfo | null>(null)
  const { data, error, isLoading, isValidating } = useSWR(`/api/pon-design/news/${params.news_id ?? 'web-magazine'}`, fetcher)
  if (error) throw new Error(error.message)

  useEffect(() => {
    try {
      if (params.news_id === undefined) notFound()
      if (data && !isLoading) setNewsDatailData(data)
    } catch (e) {
      console.error('Failed data fetch')
    }
  }, [data, isLoading, params.news_id])

  return (
    <PageLayout title={'NEWS'} subTitle={'お知らせ'}>
      {isLoading || isValidating || newsDatailData === null ? <Spinner /> : <NewsDetail title={newsDatailData.title} dateTime={newsDatailData.dateTime} label={newsDatailData.label} />}
      <section className={styles['p-detail-pager']}>
        <div className={styles['p-detail-pager__inner']}>
          <div className={styles['p-detail-pager__container']}>
            <div className={styles['p-detail-pager__previous']}>
              <h3 className={styles['p-detail-pager__page-title']}>
                <a href="#" className={styles['p-detail-pager__link']}>
                  Web Conference様のサイトを制作いたしました
                </a>
              </h3>
            </div>
            <div className={styles['p-detail-pager__next']}>
              <h3 className={styles['p-detail-pager__page-title']}>
                <a href="#" className={styles['p-detail-pager__link']}>
                  プライバシーマーク取得のお知らせ
                </a>
              </h3>
            </div>
          </div>
          <a href="../news/" className={styles['p-detail-pager__list-link']}>
            NEWS一覧
          </a>
        </div>
      </section>
    </PageLayout>
  )
}

export default NewsDetailPage
