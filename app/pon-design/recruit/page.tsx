'use client'
import Image from 'next/image'
import { createBreakpoint } from 'react-use'
import { Button } from '~/components/pon-design/Button'
import { PageLayout } from '~/components/pon-design/PageLayout'
import { Title } from '~/components/pon-design/Title'
import styles from '~/styles/pon-design/Recruit.module.scss'
import titleStyles from '~/styles/pon-design/Title.module.scss'

const useBreakpoint = createBreakpoint({ laptopL: 1440, laptop: 1179, tablet: 768, smartphone: 560 })
const RecruitPage = () => {
  const breakpoint = useBreakpoint()
  return (
    <PageLayout title={'RECRUIT'} subTitle={'採用情報'}>
      <section className={styles['p-recruit-message']}>
        <div className={styles['p-recruit-message__inner']}>
          <h2 className={[styles['p-recruit-message__title'], titleStyles['c-title'], titleStyles['c-title--section'], titleStyles['c-title--lg']].join(' ')}>
            Enjoy <br className="u-only-sp" />
            Creation for <br className="u-only-sp" />
            Client
            <span className={[styles['p-recruit-message__sub-title'], titleStyles['c-title--thin'], titleStyles['c-title--sm']].join(' ')}>楽しむ心が良いモノを生む</span>
          </h2>
          <div className={styles['p-recruit-message__text-wrapper']}>
            <span className={styles['p-recruit-message__text']}>心を弾ましながら</span>
            <span className={styles['p-recruit-message__text']}>夢いっぱいのサイトを作ろう！</span>
            <span className={styles['p-recruit-message__text']}>お客様も自分もみんなが幸せになれるように</span>
          </div>
        </div>
        <div className={styles['p-recruit-message__image-wrapper']}>
          {breakpoint === 'smartphone' ? (
            <Image
              src="/images/pon-design/recruit.png"
              alt=""
              className="p-recruit-message__image"
              width={375}
              height={290}
              style={{ objectFit: 'contain', height: 'auto', width: '100%' }}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
            />
          ) : (
            <Image
              src="/images/pon-design/recruit_pc.png"
              alt=""
              className="p-recruit-message__image"
              width={1440}
              height={780}
              style={{ objectFit: 'contain', height: 'auto', width: '100%' }}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
            />
          )}
        </div>
      </section>
      <section className={styles['p-recruit-info']}>
        <div className={styles['p-recruit-info__inner']}>
          <Title title={'募集中の職種'} className={['c-title--section', 'c-title--thin', 'c-title--sm']} />
          <ul className={styles['p-recruit-info__job-list']}>
            <li className={styles['p-recruit-info__job']}>
              <dl className={styles['p-recruit-info__job-card']}>
                <dt className={styles['p-recruit-info__term']}>雇用形態</dt>
                <dd className={styles['p-recruit-info__description']}>正社員</dd>
                <dt className={styles['p-recruit-info__term']}>給与</dt>
                <dd className={styles['p-recruit-info__description']}>400万円〜600万円（経験・能力を考慮のうえ優遇）</dd>
                <dt className={styles['p-recruit-info__term']}>仕事内容</dt>
                <dd className={styles['p-recruit-info__description']}>Webサイトの制作。サイトのデザインとコーディングを担当していただきます。</dd>
                <dt className={styles['p-recruit-info__term']}>勤務時間</dt>
                <dd className={styles['p-recruit-info__description']}>10:00 〜 19:00（実働8時間、休憩1時間）</dd>
                <dt className={styles['p-recruit-info__term']}>応募資格</dt>
                <dd className={styles['p-recruit-info__description']}>
                  PhotoshopやXDなどのデザインツールの使い方を理解し、コーディングの基礎スキルがある方。
                  <br />
                  実務未経験でも学校や独学で学習した方を歓迎します。
                  <ul className={styles['p-recruit-info__candidate-profile']}>
                    <li className={styles['p-recruit-info__example']}>デザインやコーディングを楽しめる方</li>
                    <li className={styles['p-recruit-info__example']}>常にアンテナを張って積極的にトレンドや最新の技術を取り入れる方</li>
                    <li className={styles['p-recruit-info__example']}>お客様と一緒に楽しみながら高い目的を目指せる方</li>
                  </ul>
                </dd>
                <div className={styles['p-recruit-info__button-wrapper']}>
                  <Button label={'応募する'} href={'#'} />
                  <p className={styles['p-recruit-info__notice']}>求人サイトへ遷移します</p>
                </div>
              </dl>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles['p-recruit-video']}>
        <div className={styles['p-recruit-video__inner']}>
          <Title title={'社内ムービー'} className={['c-title--section', 'c-title--thin', 'c-title--sm']} />
          <div className={styles['p-recruit-video__image-wrapper']}>
            {breakpoint === 'smartphone' ? (
              <Image
                src="/images/pon-design/recruit_video.png"
                alt=""
                width={335}
                height={188}
                style={{ objectFit: 'contain', height: 'auto' }}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
              />
            ) : (
              <Image
                src="/images/pon-design/recruit_video_pc.png"
                alt=""
                width={1110}
                height={624}
                style={{ objectFit: 'contain', height: 'auto' }}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
              />
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default RecruitPage
