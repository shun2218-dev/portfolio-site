import { memo } from 'react'
import styles from '~/styles/daily-trial/Header.module.scss'
import sectionStyles from '~/styles/daily-trial/Footer.module.scss'
import Link from 'next/link'

const HeaderMemo = () => {
  return (
    <header className={[styles['p-header'], sectionStyles['c-section']].join(' ')}>
      <div className={styles['p-header__inner']}>
        <h1 className={styles['p-header__title']}>
          <Link href="/daily-trial" className={styles['p-header__logo-link']}>
            30DAYSトライアル
          </Link>
        </h1>
        <ul className={styles['p-header__menu']}>
          <li className={styles['p-header__menu-item']}>
            <Link href="#about" className={styles['p-header__menu-item-link']}>
              デイトラとは
            </Link>
          </li>
          <li className={styles['p-header__menu-item']}>
            <Link href="#course" className={styles['p-header__menu-item-link']}>
              コース一覧
            </Link>
          </li>
          <li className={styles['p-header__menu-item']}>
            <Link href="#contact" className={styles['p-header__menu-item-link']}>
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
