import { memo } from 'react'
import styles from '~/styles/daily-trial/Header.module.scss'
import sectionStyles from '~/styles/daily-trial/Footer.module.scss'

const HeaderMemo = () => {
  return (
    <header className={[styles['p-header'], sectionStyles['c-section']].join(' ')}>
      <div className={styles['p-header__inner']}>
        <h1 className={styles['p-header__title']}>30DAYSトライアル</h1>
        <ul className={styles['p-header__menu']}>
          <li className={styles['p-header__menu-item']}>デイトラとは</li>
          <li className={styles['p-header__menu-item']}>コース一覧</li>
          <li className={styles['p-header__menu-item']}>お問い合わせ</li>
        </ul>
      </div>
    </header>
  )
}

const Header = memo(HeaderMemo)
export { Header }
