import Image from 'next/image'
import { memo } from 'react'
import styles from '~/styles/daily-trial/TopPage.module.scss'
import sectionStyles from '~/styles/daily-trial/Section.module.scss'

const DTTopMemo = () => {
  return (
    <main>
      <section className={[styles['p-hero'], sectionStyles['c-section']].join(' ')}>
        <div className={[styles['p-hero__inner'], sectionStyles['c-section__inner']].join(' ')}>
          <h1 className={styles['p-hero__title']}>
            1日1題30日で
            <span>
              プロのWebエンジニア
              <br className="u-sp-br" />
              になろう!
            </span>
          </h1>
          <p className={styles['p-hero__text']}>
            毎日設定された課題をこなすだけ！
            <br className="u-sp-br" />
            未経験から
            <br className="u-pc-br" />
            30日でプログラミングスキルが身につきます
          </p>
        </div>
      </section>
      <section className={[styles['p-about'], sectionStyles['c-section']].join(' ')}>
        <div className={sectionStyles['c-section__inner']}>
          <h1 className={sectionStyles['c-section__title']}>デイトラとは</h1>
          <div className={styles['p-about__content-wrapper']}>
            <div className={styles['p-about__image-container']}>
              <Image
                src="/images/daily-trial/about.png"
                alt="デイトラとは"
                width={887}
                height={605}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
              />
            </div>
            <div className={styles['p-about__text-container']}>
              <p className={styles['p-about__text']}>
                デイトラとは、無料で・迷わず・楽しく学べるプログラミング学習アプリです。毎日設定された課題をこなしていくだけで、未経験から30日でプログラミングスキルが身に付きます。
              </p>
              <p className={styles['p-about__text']}>1日1題30日でプロのWebエンジニアを目指しましょう！</p>
            </div>
          </div>
        </div>
      </section>
      <section className={[styles['p-course'], sectionStyles['c-section']].join(' ')}>
        <div className={sectionStyles['c-section__inner']}>
          <h1 className={sectionStyles['c-section__title']}>コース一覧</h1>
          <ul className={styles['p-course__list']}>
            <li className={styles['p-course__item']}>
              <Image
                src="/images/daily-trial/web_first.png"
                alt="初級コース"
                width={1012}
                height={506}
                style={{ width: '100%', height: '100%' }}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
              />
              <p className={styles['p-course__text']}>HTML / CSS / Bootstrap</p>
            </li>
            <li className={styles['p-course__item']}>
              <Image
                src="/images/daily-trial/web_second.png"
                alt="中級コース"
                width={1012}
                height={506}
                style={{ width: '100%', height: '100%' }}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
              />
              <p className={styles['p-course__text']}>HTML / CSS / JavaScript / jQuery</p>
            </li>
            <li className={styles['p-course__item']}>
              <Image
                src="/images/daily-trial/web_third.png"
                alt="上級コース"
                width={1012}
                height={506}
                style={{ width: '100%', height: '100%' }}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
              />
              <p className={styles['p-course__text']}>PHP / WordPress</p>
            </li>
          </ul>
        </div>
      </section>
      <section className={[styles['p-contact'], sectionStyles['c-section']].join(' ')}>
        <div className={sectionStyles['c-section__inner']}>
          <h1 className={sectionStyles['c-section__title']}>お問い合わせ</h1>
          <div className={styles['p-contact__text-container']}>
            <p className={styles['p-contact__text']}>さあ今日から30日間を始めよう！</p>
          </div>
          <form action="" name="contact-form" className={styles['p-contact__form']}>
            <input type="email" inputMode="email" placeholder="メールアドレス" className={styles['p-contact__email']} />
            <button type="submit" className={styles['p-contact__submit-button']}>
              無料ではじめる
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

const DTTop = memo(DTTopMemo)
export default DTTop
