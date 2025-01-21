'use client'
import Image from 'next/image'
import Link from 'next/link'
import { memo, MouseEvent, useState } from 'react'
import styles from '~/styles/sneakers/Header.module.scss'

const HeaderMemo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pageJump = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (e.target instanceof HTMLAnchorElement) {
      const targetId = new URL(e.target.href).hash.replace('#', '')
      const targetSection = document.getElementById(targetId) as HTMLElement | null
      if (targetSection) {
        const targetY = targetSection.getBoundingClientRect().top + window.scrollY

        window.scrollTo({
          top: targetY - 87,
          left: 0,
          behavior: 'smooth',
        })
        setIsMenuOpen((prev) => !prev)
      }
    }
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <header className={styles['l-header']}>
      <h1 className={styles['l-header__title']}>
        <Link className={styles['l-header__logo-link']} href="/sneakers" aria-label="Sneakers" role="img">
          <Image src="/images/sneakers/logo.svg" alt="Sneakers" className={styles['l-header__logo']} width={175} height={40} />
        </Link>
      </h1>
      <button
        type="button"
        className={[styles['l-header__menu-button'], 'js-menu-button'].join(' ')}
        data-is-menu-open={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        id="header-nav-button"
        aria-label="navigation button"
        aria-controls="header-nav"
        aria-expanded={isMenuOpen}
      >
        <span className={styles['l-header__menu-bar']}></span>
      </button>
      <nav className={styles['l-header__nav']} data-is-menu-open={isMenuOpen} id="header-nav">
        <ul className={styles['l-header__menu-list']}>
          <li className={styles['l-header__menu-item']}>
            <Link href="#pickup" className={[styles['l-header__menu-link'], 'js-header-nav'].join(' ')} onClick={pageJump}>
              PICK UP
            </Link>
          </li>
          <li className={styles['l-header__menu-item']}>
            <Link href="#feature" className={[styles['l-header__menu-link'], 'js-header-nav'].join(' ')} onClick={pageJump}>
              FEATURE
            </Link>
          </li>
          <li className={styles['l-header__menu-item']}>
            <Link href="#contact" className={[styles['l-header__menu-link'], 'js-header-nav'].join(' ')} onClick={pageJump}>
              CONTACT
            </Link>
          </li>
        </ul>
        <ul className={styles['l-header__media']}>
          <li className={styles['l-header__media-item']}>
            <Link href="#" className={[styles['l-header__media-link'], styles['l-header__media-link--twitter']].join(' ')}>
              Twitter
            </Link>
          </li>
          <li className={styles['l-header__media-item']}>
            <Link href="#" className={[styles['l-header__media-link'], styles['l-header__media-link--facebook']].join(' ')}>
              facebook
            </Link>
          </li>
          <li className={styles['l-header__media-item']}>
            <Link href="#" className={[styles['l-header__media-link'], styles['l-header__media-link--instagram']].join(' ')}>
              Instagram
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles['l-header__nav-overlay']}></div>
    </header>
  )
}

const Header = memo(HeaderMemo)
export { Header }
