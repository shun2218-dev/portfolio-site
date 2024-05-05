import { memo } from 'react'
import styles from '~/styles/sneakers/Footer.module.scss'

const FooterMemo = () => {
  return (
    <footer className={styles['p-footer']}>
      <small className={styles['p-footer__copyrights']}>&copy; Sneakers</small>
    </footer>
  )
}

const Footer = memo(FooterMemo)
export { Footer }
