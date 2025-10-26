import Link from 'next/link'
import { memo } from 'react'
import { GITHUB_NAME } from '~/app/_const/top/GITHUB_NAME'
import styles from '~/styles/top/Header.module.scss'

const HeaderMemo = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <div className={styles.navLogo}>
        <Link href="#about">{GITHUB_NAME}</Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
      </div>
    </nav>
  </header>
)

const Header = memo(HeaderMemo)
export { Header }
