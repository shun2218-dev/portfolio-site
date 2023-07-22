import { FC, memo, useMemo } from 'react'
import styles from '~/styles/pon-design/Title.module.scss'

type Props = {
  title: string
  subTitle?: string
  className?: string | string[]
  page?: boolean
}
const Title: FC<Props> = ({ title, subTitle, className = '', page = false }) => {
  const classes = () => {
    if (typeof className === 'string') {
      return styles[className]
    } else {
      return className.map((c) => styles[c]).join(' ')
    }
  }
  return (
    <h1 className={[styles['c-title'], page && styles['c-title--page'], classes()].join(' ')}>
      {title}
      {subTitle && <span className={styles['c-hero__sub-title']}>{subTitle}</span>}
    </h1>
  )
}

export { Title }
