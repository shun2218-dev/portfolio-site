'use client'
import Image from 'next/image'
import { createBreakpoint } from 'react-use'
import { PageLayout } from '~/components/pon-design/PageLayout'
import styles from '~/styles/pon-design/Service.module.scss'

const useBreakpoint = createBreakpoint({ laptopL: 1440, laptop: 1179, tablet: 768, smartphone: 560 })
const ServicePage = () => {
  const breakpoint = useBreakpoint()
  return (
    <PageLayout title={'SERVICE'} subTitle={'事業内容'}>
      <article className={styles['p-service-article']}>
        <div className={styles['p-service-article__inner']}>
          <section className={styles['p-service-article']}>
            <ul className={styles['p-service-article__list']}>
              <li className={styles['p-service-article__list-item']}>
                <div className={styles['p-service-article__image-wrapper']}>
                  {breakpoint === 'smartphone' ? (
                    <Image
                      src="/images/pon-design/service_web-production.png"
                      alt="webサイト制作"
                      className={styles['p-service-article__item-image']}
                      width={335}
                      height={211}
                      style={{ objectFit: 'contain', height: 'auto' }}
                    />
                  ) : (
                    <Image
                      src="/images/pon-design/service_web-production_pc.png"
                      alt="webサイト制作"
                      className={styles['p-service-article__item-image']}
                      width={445}
                      height={280}
                      style={{ objectFit: 'contain', height: 'auto' }}
                    />
                  )}
                </div>
                <div className={styles['p-service-article__text-wrapper']}>
                  <h3 className={[styles['p-service-article__item-title'], 'u-fs18'].join(' ')}>Webサイト制作</h3>
                  <p className={styles['p-service-article__item-text']}>
                    新規サイトはもちろん、サイトリニューアルやランディングページ制作も承っております。
                    サイトのゴールはお客様の夢や目的を実現することです。そのためにまずはしっかりとお話をうかがい、サイトに必要な要素を洗い出します。その後、ワイヤーフレーム（サイトのレイアウト）の作成、デザインの制作、コーディングと進みます。制作の過程でお客様とのお打ち合わせを数回実施させていただき、ご要望とご意見を反映しながらサイトを制作していきます。
                  </p>
                </div>
              </li>
              <li className={styles['p-service-article__list-item']}>
                <div className={styles['p-service-article__image-wrapper']}>
                  {breakpoint === 'smartphone' ? (
                    <Image
                      src="/images/pon-design/service_web-operation.png"
                      alt="Webサイト運用"
                      className={styles['p-service-article__item-image']}
                      width={335}
                      height={211}
                      style={{ objectFit: 'contain', height: 'auto' }}
                    />
                  ) : (
                    <Image
                      src="/images/pon-design/service_web-operation_pc.png"
                      alt="Webサイト運用"
                      className={styles['p-service-article__item-image']}
                      width={445}
                      height={280}
                      style={{ objectFit: 'contain', height: 'auto' }}
                    />
                  )}
                </div>
                <div className={styles['p-service-article__text-wrapper']}>
                  <h3 className={[styles['p-service-article__item-title'], 'u-fs18'].join(' ')}>Webサイト運用</h3>
                  <p className={styles['p-service-article__item-text']}>
                    サイトの更新作業や独自のアクセス解析に基づいたサイト改善のご提案が可能です。
                    日々の面倒な更新作業は私たちにおまかせください。テキストの修正やリンクの張り替えなどの簡単な作業から、特集ページやバナーのデザインまで可能です。
                    また、アクセス解析によるサイト改善も承っております。ご購入やお申込数などにお悩みでしたらぜひご相談ください。サイトの課題を発見し、改善案のご提案から実装までワンストップで対応いたします。
                  </p>
                </div>
              </li>
              <li className={styles['p-service-article__list-item']}>
                <div className={styles['p-service-article__image-wrapper']}>
                  {breakpoint === 'smartphone' ? (
                    <Image
                      src="/images/pon-design/service_app-development.png"
                      alt="アプリ開発"
                      className={styles['p-service-article__item-image']}
                      width={335}
                      height={211}
                      style={{ objectFit: 'contain', height: 'auto' }}
                    />
                  ) : (
                    <Image
                      src="/images/pon-design/service_app-development_pc.png"
                      alt="アプリ開発"
                      className={styles['p-service-article__item-image']}
                      width={445}
                      height={280}
                      style={{ objectFit: 'contain', height: 'auto' }}
                    />
                  )}
                </div>
                <div className={styles['p-service-article__text-wrapper']}>
                  <h3 className={[styles['p-service-article__item-title'], 'u-fs18'].join(' ')}>アプリ開発</h3>
                  <p className={styles['p-service-article__item-text']}>
                    スマートフォンアプリ開発の他、Vue.jsやReactによるWebアプリの開発が可能です。開発力のみならず、充実したユーザー体験をもたらすためのUXデザインにも自信があります。作って終わり、ではなくユーザーに愛されるUI（ユーザーインターフェース）を実現し、アプリ開発によるお客様の事業の目的を達成する推進力となることを目指します。
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </PageLayout>
  )
}

export default ServicePage
