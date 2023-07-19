import Image from 'next/image'
import React, { FC, memo, useCallback, useState } from 'react'
import { NewsDetailInfo } from '~/types/pon-design'
import { ShareButton } from './ShareButton'
import styles from '~/styles/pon-design/NewsDetail.module.scss'
import newsStyles from '~/styles/pon-design/News.module.scss'
import { createBreakpoint } from 'react-use'

type Props = Omit<NewsDetailInfo, 'id'>

const useBreakpoint = createBreakpoint({ laptopL: 1440, tablet: 768, smartphone: 560 })

const NewsDetailMemo: FC<Props> = ({ title, dateTime, label }) => {
  const breakpoint = useBreakpoint()
  const [counter, setCounter] = useState<number>(0)
  const countHandler = useCallback(() => setCounter((prev) => prev + 1), [])
  return (
    <article className={styles['p-detail-content']}>
      <div className={styles['p-detail-content__inner']}>
        <h1 className={styles['p-detail-content__page-title']}>{title}</h1>
        <div className={[styles['p-detail-content__header'], newsStyles['c-news__header']].join(' ')}>
          <time className={newsStyles['c-news__date']} dateTime="2030-02-01">
            {dateTime.year}.{dateTime.month}.{dateTime.day}
          </time>
          <div className={newsStyles['c-news__label']}>
            <span className={newsStyles['c-news__label-text']}>{label}</span>
          </div>
        </div>
        {breakpoint === 'smartphone' ? (
          <Image
            src="/images/pon-design/article.png"
            alt=""
            className={styles['p-detail-content__image']}
            width={335}
            height={187}
            style={{ objectFit: 'cover', height: 'auto' }}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
          />
        ) : (
          <Image
            src="/images/pon-design/article_pc.png"
            alt=""
            className={styles['p-detail-content__image']}
            width={750}
            height={400}
            style={{ objectFit: 'cover', height: 'auto' }}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
          />
        )}
        <div className={styles['p-detail-content__prologue-wrapper']}>
          <p className={styles['p-detail-content__prologue']}>テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります</p>
        </div>
        <div className={styles['p-detail-content__main-sententce']}>
          <div className={styles['p-detail-content__sentence-wrapper']}>
            <h2 className={styles['p-detail-content__topic-title']}>大見出し</h2>
            <p className={styles['p-detail-content__sentence']}>テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります</p>
          </div>
          <div className={styles['p-detail-content__sentence-wrapper']}>
            <h3 className={styles['p-detail-content__subject-title']}>小見出し</h3>
            <p className={styles['p-detail-content__sentence']}>テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります</p>
            <p className={styles['p-detail-content__sentence']}>テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります</p>
          </div>
        </div>
        <div className={styles['p-detail-content__sns']}>
          <ShareButton type={'thumbsUp'} onClick={countHandler} label={'いいね!'} iconPath={'/images/pon-design/thumbs-up.svg'} iconSize={15} counterState={counter} />
          <ShareButton type={'share'} label={'シェア'} />
          <ShareButton type={'twitter'} label={'ツイート'} iconPath={'/images/pon-design/twitter.svg'} iconSize={15} />
          <ShareButton type={'bookmark'} label={'B! ブックマーク'} />
          <ShareButton type={'line'} iconPath={'/images/pon-design/line.svg'} iconSize={30} />
        </div>
      </div>
    </article>
  )
}

const NewsDetail = memo(NewsDetailMemo)
export { NewsDetail }
