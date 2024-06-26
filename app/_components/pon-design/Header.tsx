'use client'
import Link from 'next/link'
import { FC, memo, useEffect, useMemo, useState } from 'react'
import styles from '~/styles/pon-design/Header.module.scss'
import { useElementHeight } from '~/app/_hooks/useElementHeight'
import { createBreakpoint, useToggle, useWindowScroll } from 'react-use'
import { NextFont } from 'next/dist/compiled/@next/font'

const useBreakpoint = createBreakpoint({ laptopL: 1440, laptop: 1024, tablet: 768, smartphone: 560 })

type Props = {
  font: NextFont
}

const HeaderMemo: FC<Props> = ({ font }) => {
  const breakpoint = useBreakpoint()
  const { el, DOMRect } = useElementHeight()
  const { y } = useWindowScroll()
  const [isClient, setIsClient] = useState(false)
  const [on, toggle] = useToggle(false)
  const isNavHidden = useMemo(() => {
    if (!(breakpoint === 'tablet' || breakpoint === 'smartphone')) {
      return false
    } else if (on) {
      return false
    } else {
      return true
    }
  }, [breakpoint, on])

  const NAV_LIST = useMemo(() => {
    return [
      {
        label: 'NEWS',
        link: '/pon-design/news',
      },
      {
        label: 'SERVICE',
        link: '/pon-design/service',
      },
      {
        label: 'WORKS',
        link: '/pon-design/works',
      },
      {
        label: 'COMPANY',
        link: '/pon-design/company',
      },
      {
        label: 'RECRUIT',
        link: '/pon-design/recruit',
      },
      {
        label: 'CONTACT',
        link: '/pon-design/contact',
      },
    ]
  }, [])

  useEffect(() => {
    if (breakpoint !== 'smartphone') {
      toggle(false)
    }
  }, [breakpoint, on, toggle])

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <header className={[styles['l-header'], font.className].join(' ')} ref={el} data-is-fixed={y > DOMRect?.height! ? true : false} data-is-open={on}>
      <div className={styles['l-header__inner']}>
        <h1 className={styles['l-header__logo']}>
          <Link href="/pon-design" className={styles['l-header__logo-link']} data-pw="header-logo" aria-label="PON DESIGN">
            <svg xmlns="http://www.w3.org/2000/svg" width="160.92" height="17.376" viewBox="0 0 160.92 17.376" className={styles['l-header__logo-image']}>
              <title>PON DESIGN</title>
              <path
                id="path_10"
                data-name="path 10"
                d="M-73.188-16.8a9.333,9.333,0,0,1,3.876.744,5.758,5.758,0,0,1,2.532,2.112,5.818,5.818,0,0,1,.888,3.24,5.834,5.834,0,0,1-.888,3.228,5.656,5.656,0,0,1-2.532,2.112,9.466,9.466,0,0,1-3.876.732h-3.384V0H-80.46V-16.8Zm-.216,9a4.083,4.083,0,0,0,2.664-.756,2.633,2.633,0,0,0,.912-2.148,2.661,2.661,0,0,0-.912-2.172,4.083,4.083,0,0,0-2.664-.756h-3.168V-7.8ZM-54.324.288A9.806,9.806,0,0,1-59.04-.84a8.372,8.372,0,0,1-3.288-3.108A8.485,8.485,0,0,1-63.516-8.4a8.485,8.485,0,0,1,1.188-4.452A8.372,8.372,0,0,1-59.04-15.96a9.806,9.806,0,0,1,4.716-1.128,9.736,9.736,0,0,1,4.7,1.128,8.48,8.48,0,0,1,3.288,3.108,8.42,8.42,0,0,1,1.2,4.452,8.42,8.42,0,0,1-1.2,4.452A8.48,8.48,0,0,1-49.62-.84,9.736,9.736,0,0,1-54.324.288Zm0-3.312a5.331,5.331,0,0,0,2.688-.684,4.908,4.908,0,0,0,1.884-1.908A5.609,5.609,0,0,0-49.068-8.4a5.609,5.609,0,0,0-.684-2.784,4.908,4.908,0,0,0-1.884-1.908,5.331,5.331,0,0,0-2.688-.684,5.331,5.331,0,0,0-2.688.684A4.908,4.908,0,0,0-58.9-11.184,5.609,5.609,0,0,0-59.58-8.4,5.609,5.609,0,0,0-58.9-5.616a4.908,4.908,0,0,0,1.884,1.908A5.331,5.331,0,0,0-54.324-3.024ZM-26.364-16.8V0h-3.192l-8.376-10.2V0h-3.84V-16.8h3.216L-30.2-6.6V-16.8Zm11.64,0h7.632a10.726,10.726,0,0,1,4.836,1.044,7.817,7.817,0,0,1,3.264,2.94A8.269,8.269,0,0,1,2.172-8.4,8.269,8.269,0,0,1,1.008-3.984a7.817,7.817,0,0,1-3.264,2.94A10.726,10.726,0,0,1-7.092,0h-7.632Zm7.44,13.608a5.646,5.646,0,0,0,4.02-1.4,4.959,4.959,0,0,0,1.5-3.8,4.959,4.959,0,0,0-1.5-3.8,5.646,5.646,0,0,0-4.02-1.4h-3.552V-3.192ZM18.54-3.12V0H5.532V-16.8h12.7v3.12H9.4v3.648h7.8v3.024H9.4V-3.12ZM27.588.288a13.746,13.746,0,0,1-3.852-.54,9.034,9.034,0,0,1-2.988-1.4l1.32-2.928a8.957,8.957,0,0,0,2.568,1.272,9.646,9.646,0,0,0,2.976.48,4.754,4.754,0,0,0,2.448-.492,1.486,1.486,0,0,0,.792-1.308,1.25,1.25,0,0,0-.468-1,3.548,3.548,0,0,0-1.2-.636q-.732-.24-1.98-.528A27.371,27.371,0,0,1,24.06-7.7a5.108,5.108,0,0,1-2.1-1.464,3.954,3.954,0,0,1-.876-2.688,4.676,4.676,0,0,1,.792-2.652,5.328,5.328,0,0,1,2.388-1.884,9.744,9.744,0,0,1,3.9-.7,12.914,12.914,0,0,1,3.144.384A9.288,9.288,0,0,1,34-15.6l-1.2,2.952a9.368,9.368,0,0,0-4.656-1.32,4.366,4.366,0,0,0-2.412.528,1.612,1.612,0,0,0-.78,1.392,1.361,1.361,0,0,0,.9,1.284,14.131,14.131,0,0,0,2.748.828,27.371,27.371,0,0,1,3.144.912,5.206,5.206,0,0,1,2.1,1.44,3.861,3.861,0,0,1,.876,2.664,4.587,4.587,0,0,1-.8,2.628A5.4,5.4,0,0,1,31.5-.408,9.833,9.833,0,0,1,27.588.288ZM37.812-16.8H41.7V0H37.812ZM57.468-8.664H61.02v6.816A10.148,10.148,0,0,1,57.852-.264a12.3,12.3,0,0,1-3.624.552,9.821,9.821,0,0,1-4.7-1.116,8.308,8.308,0,0,1-3.276-3.1A8.53,8.53,0,0,1,45.06-8.4a8.53,8.53,0,0,1,1.188-4.476,8.267,8.267,0,0,1,3.3-3.1A10.013,10.013,0,0,1,54.3-17.088a10.4,10.4,0,0,1,4.008.744,7.942,7.942,0,0,1,3.024,2.16l-2.5,2.3a5.773,5.773,0,0,0-4.344-1.9,5.929,5.929,0,0,0-2.856.672,4.821,4.821,0,0,0-1.944,1.9A5.58,5.58,0,0,0,49-8.4a5.532,5.532,0,0,0,.7,2.784,4.923,4.923,0,0,0,1.932,1.908,5.726,5.726,0,0,0,2.82.684,6.3,6.3,0,0,0,3.024-.72ZM80.46-16.8V0H77.268L68.892-10.2V0h-3.84V-16.8h3.216L76.62-6.6V-16.8Z"
                transform="translate(80.46 17.088)"
                fill="#fff"
              />
            </svg>
          </Link>
        </h1>
        {isClient && (breakpoint === 'tablet' || breakpoint === 'smartphone') && (
          <button
            className={[styles['l-header__nav-button']].join(' ')}
            data-is-visible={breakpoint === 'tablet' || breakpoint === 'smartphone' ? true : false}
            onClick={toggle}
            id="header-nav-button"
            aria-label="navigation button"
            aria-controls="header-nav"
            aria-expanded={on}
          >
            <span className={styles['l-header__nav-button-bar']}></span>
          </button>
        )}
      </div>
      <nav className={[styles['l-header__nav']].join(' ')} id="header-nav" title="header navigation">
        <ul className={styles['l-header__nav-menu']} aria-hidden={isNavHidden}>
          {NAV_LIST.map((nav) => (
            <li className={styles['l-header__nav-item']} key={nav.label.toLocaleLowerCase()} onClick={toggle}>
              <Link href={`${nav.link}`} className={styles['l-header__nav-link']} tabIndex={!isNavHidden ? 1 : -1}>
                <span className={styles['l-header__link-text']}>{nav.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

const Header = memo(HeaderMemo)
export { Header }
