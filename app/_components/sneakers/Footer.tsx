import { memo } from 'react'
import styles from '~/styles/sneakers/Footer.module.scss'

const FooterMemo = () => {
  return (
    <footer className={styles['l-footer']}>
      <small className={styles['l-footer__copyrights']}>&copy; Sneakers</small>
    </footer>
  )
}

const Footer = memo(FooterMemo)
export { Footer }
