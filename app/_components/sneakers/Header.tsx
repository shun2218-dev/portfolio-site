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
    <header className={styles['p-header']}>
      <Link className={styles['p-header__logo-link']} href="/sneakers" aria-label="Sneakers" role="img">
        <h1 className={styles['p-header__title']}>
          <Image src="/images/sneakers/logo.svg" alt="Sneakers" className={styles['p-header__logo']} width={175} height={40} />
        </h1>
      </Link>
      <button type="button" className={[styles['p-header__menu-button'], 'js-menu-button'].join(' ')} data-is-menu-open={isMenuOpen} onClick={() => setIsMenuOpen((prev) => !prev)}>
        <span className={styles['p-header__menu-bar']}></span>
      </button>
      <nav className={styles['p-header__nav']} data-is-menu-open={isMenuOpen}>
        <ul className={styles['p-header__menu-list']}>
          <li className={styles['p-header__menu-item']}>
            <Link href="#pickup" className={[styles['p-header__menu-link'], 'js-header-nav'].join(' ')} onClick={pageJump}>
              PICK UP
            </Link>
          </li>
          <li className={styles['p-header__menu-item']}>
            <Link href="#feature" className={[styles['p-header__menu-link'], 'js-header-nav'].join(' ')} onClick={pageJump}>
              FEATURE
            </Link>
          </li>
          <li className={styles['p-header__menu-item']}>
            <Link href="#contact" className={[styles['p-header__menu-link'], 'js-header-nav'].join(' ')} onClick={pageJump}>
              CONTACT
            </Link>
          </li>
        </ul>
        <ul className={styles['p-header__media']}>
          <li className={styles['p-header__media-item']}>
            <Link href="#" className={[styles['p-header__media-link'], styles['p-header__media-link--twitter']].join(' ')}>
              Twitter
            </Link>
          </li>
          <li className={styles['p-header__media-item']}>
            <Link href="#" className={[styles['p-header__media-link'], styles['p-header__media-link--facebook']].join(' ')}>
              facebook
            </Link>
          </li>
          <li className={styles['p-header__media-item']}>
            <Link href="#" className={[styles['p-header__media-link'], styles['p-header__media-link--instagram']].join(' ')}>
              Instagram
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles['p-header__nav-overlay']}></div>
    </header>
  )
}

const Header = memo(HeaderMemo)
export { Header }
