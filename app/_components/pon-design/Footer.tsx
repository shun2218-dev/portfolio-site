'use client'
import React, { FC, memo, useCallback } from 'react'
import styles from '~/styles/pon-design/Footer.module.scss'
import Link from 'next/link'
import { NextFont } from 'next/dist/compiled/@next/font'

type Props = {
  font: NextFont
}

const FooterMemo: FC<Props> = ({ font }) => {
  const scrollToTop = useCallback(() => {
    scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <footer className={[styles['l-footer'], font.className].join(' ')}>
      <nav className={styles['l-footer__nav']}>
        <ul className={styles['l-footer__nav-menu']}>
          <li className={styles['l-footer__nav-item']}>
            <Link href="/pon-design/news/" className={styles['l-footer__nav-link']}>
              NEWS
            </Link>
          </li>
          <li className={styles['l-footer__nav-item']}>
            <Link href="/pon-design/service" className={styles['l-footer__nav-link']}>
              SERVICE
            </Link>
          </li>
          <li className={styles['l-footer__nav-item']}>
            <Link href="/pon-design/works" className={styles['l-footer__nav-link']}>
              WORKS
            </Link>
          </li>
          <li className={styles['l-footer__nav-item']}>
            <Link href="/pon-design/company" className={styles['l-footer__nav-link']}>
              COMPANY
            </Link>
          </li>
          <li className={styles['l-footer__nav-item']}>
            <Link href="/pon-design/recruit" className={styles['l-footer__nav-link']}>
              RECRUIT
            </Link>
          </li>
          <li className={styles['l-footer__nav-item']}>
            <Link href="/pon-design/contact" className={styles['l-footer__nav-link']}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <button className={[styles['l-footer__scroll-button'], 'js-scroll-button'].join(' ')} onClick={scrollToTop} id={'scroll-to-top'} aria-label="scroll to page top"></button>
      <small className={styles['l-footer__copyright']}>&copy;PON DESIGN</small>
    </footer>
  )
}

const Footer = memo(FooterMemo)
export { Footer }
