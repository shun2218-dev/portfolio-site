'use client'
import Image from 'next/image'
import { createBreakpoint } from 'react-use'
import styles from '~/styles/pon-design/Company.module.scss'
import { Title } from '~/components/pon-design/Title'
import Link from 'next/link'
import { PageLayout } from '~/components/pon-design/PageLayout'

const useBreakpoint = createBreakpoint({ laptopL: 1440, laptop: 1179, tablet: 768, smartphone: 560 })
const CompanyPage = () => {
  const breakpoint = useBreakpoint()
  return (
    <PageLayout title={'COMPANY'} subTitle={'私たちについて'}>
      <section className={styles['p-company-message']}>
        <div className={styles['p-company-message__inner']}>
          <Title as="h3" title={'メッセージ'} className={['c-title--section', 'c-title--sm']} />
          <p className={styles['p-company-message__goal']}>
            <span className={styles['p-company-message__goal-text']}>サイトのゴール = </span>
            <span className={styles['p-company-message__goal-text']}>夢を叶えること</span>
          </p>
          <p className={styles['p-company-message__slogan']}>
            <span className={styles['p-company-message__slogan-text']}>お客様の夢を叶えること。</span>
            <span className={styles['p-company-message__slogan-text']}>
              それがWebサイトのゴールであり、
              <br className="u-only-sp" />
              私たちが目指すことです。
            </span>
            <span className={styles['p-company-message__slogan-text']}>
              だからこそちゃんと成果を出すサイトを
              <br className="u-only-sp" />
              全力でお作りします。
            </span>
            <span className={styles['p-company-message__slogan-text']}>お客様の笑顔を見たい。</span>
            <span className={styles['p-company-message__slogan-text']}>夢を実現する手助けをさせてください。</span>
          </p>
          <div className={styles['p-company-message__from-ceo']}>
            <div className={styles['p-company-message__image-wrapper']}>
              {breakpoint === 'smartphone' ? (
                <Image
                  src="/images/pon-design/company_message.png"
                  alt="CEO"
                  width={335}
                  height={248}
                  style={{ objectFit: 'contain', height: 'auto' }}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
                />
              ) : (
                <Image
                  src="/images/pon-design/company_message_pc.png"
                  alt="CEO"
                  width={445}
                  height={330}
                  style={{ objectFit: 'contain', height: 'auto' }}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
                />
              )}
            </div>
            <div className={styles['p-company-message__text-wrapper']}>
              <p className={styles['p-company-message__text']}>
                テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
              </p>
              <p className={styles['p-company-message__text']}>
                テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
              </p>
              <p className={styles['p-company-message__name']}>代表取締役社長 猫山ポン太郎</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['p-company-info']}>
        <div className={styles['p-company-info__inner']}>
          <Title as="h3" title={'会社概要'} className={['c-title--section', 'c-title--sm']} />
          <dl className={styles['p-company-info__list']}>
            <dt className={styles['p-company-info__term']}>社名</dt>
            <dd className={styles['p-company-info__description']}>株式会社PON DESIGN</dd>
            <dt className={styles['p-company-info__term']}>設立</dt>
            <dd className={styles['p-company-info__description']}>2020.01.10</dd>
            <dt className={styles['p-company-info__term']}>代表取締役</dt>
            <dd className={styles['p-company-info__description']}>猫山ポン太郎</dd>
            <dt className={styles['p-company-info__term']}>資本金</dt>
            <dd className={styles['p-company-info__description']}>1,000,000円</dd>
            <dt className={styles['p-company-info__term']}>所在地</dt>
            <dd className={styles['p-company-info__description']}>〒555-5555 東京都千代田区 ポンビルディング 606</dd>
          </dl>

          {breakpoint === 'smartphone' ? (
            <Image
              src="/images/pon-design/company_map.png"
              alt="google map"
              className={styles['p-company-info__map']}
              width={335}
              height={240}
              style={{ objectFit: 'contain', height: 'auto' }}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
            />
          ) : (
            <Image
              src="/images/pon-design/company_map_pc.png"
              alt="google map"
              className={styles['p-company-info__map']}
              width={1110}
              height={394}
              style={{ objectFit: 'contain', height: 'auto' }}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
            />
          )}

          <Link href="#" className={styles['p-company-info__map-link']}>
            Google mapで見る
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}

export default CompanyPage
