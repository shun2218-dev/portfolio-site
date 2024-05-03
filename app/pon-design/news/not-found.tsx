'use client'
import Link from 'next/link'
import buttonStyles from '~/styles/pon-design/Button.module.scss'
import styles from '~/styles/pon-design/NewsPage.module.scss'
import { PageLayout } from '~/components/pon-design/PageLayout'
import { redirect, useRouter } from 'next/navigation'

const NotFoundNewsListPage = () => {
  const router = useRouter()
  return (
    <PageLayout title={'NEWS'} subTitle={'お知らせ'}>
      <article className={styles['p-news-article']}>
        <div className={styles['p-news-article__inner']}>
          <div className={styles['p-news-article__error-message']}>
            <p>Not Found News Data</p>
            <button onClick={() => router.back()} className={[buttonStyles['c-button'], styles['p-news-article__error-link']].join(' ')}>
              ニュース一覧に戻る
            </button>
          </div>
        </div>
      </article>
    </PageLayout>
  )
}

export default NotFoundNewsListPage
