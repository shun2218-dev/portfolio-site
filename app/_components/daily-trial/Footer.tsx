import { memo } from 'react'
import styles from '~/styles/daily-trial/Footer.module.scss'
import sectionStyles from '~/styles/daily-trial/Footer.module.scss'

const FooterMemo = () => {
  return (
    <footer className={[styles['p-footer'], sectionStyles['c-section']].join(' ')}>
      <div className={styles['p-footer__inner']}>
        <div className={styles['p-footer__text-container']}>
          <small className={styles['p-footer__copyright']}>Copyright(C) 2020 東京フリーランス ALL Rights Reserved.</small>
        </div>
      </div>
    </footer>
  )
}

const Footer = memo(FooterMemo)
export { Footer }
