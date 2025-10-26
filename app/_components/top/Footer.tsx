import { memo } from 'react'
import { GITHUB_NAME } from '~/app/_const/top/GITHUB_NAME'
import styles from '~/styles/top/Footer.module.scss'

const FooterMemo = () => (
  <footer className={styles.footer}>
    <p>&copy; 2025 {GITHUB_NAME}. All rights reserved.</p>
  </footer>
)

const Footer = memo(FooterMemo)
export { Footer }
