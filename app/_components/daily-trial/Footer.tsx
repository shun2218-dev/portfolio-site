import { memo } from 'react'
import styles from '~/styles/daily-trial/Footer.module.scss'
import sectionStyles from '~/styles/daily-trial/Footer.module.scss'

const FooterMemo = () => {
  return (
    <footer className={[styles['l-footer'], sectionStyles['c-section']].join(' ')}>
      <div className={styles['l-footer__inner']}>
        <div className={styles['l-footer__text-container']}>
          <small className={styles['l-footer__copyright']}>Copyright(C) 2020 東京フリーランス ALL Rights Reserved.</small>
        </div>
      </div>
    </footer>
  )
}

const Footer = memo(FooterMemo)
export { Footer }
