'use client'
import Image from 'next/image'
import { PageLayout } from '~/components/pon-design/PageLayout'
import styles from '~/styles/pon-design/Works.module.scss'

const WorksPage = () => {
  return (
    <PageLayout title={'WORKS'} subTitle={'制作実績'}>
      <article className={styles['p-works-article']}>
        <div className={styles['p-works-article__inner']}>
          <section className={styles['p-works-article']}>
            <ul className={styles['p-works-article__list']}>
              <li className={styles['p-works-article__list-item']}>
                <div className={styles['p-works-article__image-wrapper']}>
                  <Image
                    src="/images/pon-design/works_smoothiesta.png"
                    alt="Smoothiesta"
                    className={styles['p-works-article__item-image']}
                    width={345}
                    height={235}
                    style={{ objectFit: 'contain', height: 'auto' }}
                  />
                </div>
                <h3 className="p-works-article__item-title u-fs18">Smoothiesta 様</h3>
              </li>
              <li className={styles['p-works-article__list-item']}>
                <div className={styles['p-works-article__image-wrapper']}>
                  <Image
                    src="/images/pon-design/works_web-conference.png"
                    alt="Web Conference"
                    className={styles['p-works-article__item-image']}
                    width={345}
                    height={235}
                    style={{ objectFit: 'contain', height: 'auto' }}
                  />
                </div>
                <h3 className="p-works-article__item-title u-fs18">Web Conference 様</h3>
              </li>
              <li className={styles['p-works-article__list-item']}>
                <div className={styles['p-works-article__image-wrapper']}>
                  <Image
                    src="/images/pon-design/works_lamina.png"
                    alt="LAMINA"
                    className={styles['p-works-article__item-image']}
                    width={345}
                    height={235}
                    style={{ objectFit: 'contain', height: 'auto' }}
                  />
                </div>
                <h3 className="p-works-article__item-title u-fs18">LAMINA 様</h3>
              </li>
              <li className={styles['p-works-article__list-item']}>
                <div className={styles['p-works-article__image-wrapper']}>
                  <Image
                    src="/images/pon-design/works_citylab.png"
                    alt="CITYLab"
                    className={styles['p-works-article__item-image']}
                    width={345}
                    height={235}
                    style={{ objectFit: 'contain', height: 'auto' }}
                  />
                </div>
                <h3 className="p-works-article__item-title u-fs18">CITYLab 様</h3>
              </li>
              <li className={styles['p-works-article__list-item']}>
                <div className={styles['p-works-article__image-wrapper']}>
                  <Image
                    src="/images/pon-design/works_tabilog.png"
                    alt="TABILOG"
                    className={styles['p-works-article__item-image']}
                    width={345}
                    height={235}
                    style={{ objectFit: 'contain', height: 'auto' }}
                  />
                </div>
                <h3 className="p-works-article__item-title u-fs18">TABILOG 様</h3>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </PageLayout>
  )
}

export default WorksPage
