import { memo } from 'react'
import styles from '~/styles/daily-trial/Header.module.scss'
import sectionStyles from '~/styles/daily-trial/Footer.module.scss'
import Link from 'next/link'

const HeaderMemo = () => {
  return (
    <header className={[styles['l-header'], sectionStyles['c-section']].join(' ')}>
      <div className={styles['l-header__inner']}>
        <h1 className={styles['l-header__title']}>
          <Link href="/daily-trial" className={styles['l-header__logo-link']}>
            30DAYSトライアル
          </Link>
        </h1>
        <ul className={styles['l-header__menu']}>
          <li className={styles['l-header__menu-item']}>
            <Link href="#about" className={styles['l-header__menu-item-link']}>
              デイトラとは
            </Link>
          </li>
          <li className={styles['l-header__menu-item']}>
            <Link href="#course" className={styles['l-header__menu-item-link']}>
              コース一覧
            </Link>
          </li>
          <li className={styles['l-header__menu-item']}>
            <Link href="#contact" className={styles['l-header__menu-item-link']}>
              お問い合わせ
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

const Header = memo(HeaderMemo)
export { Header }
