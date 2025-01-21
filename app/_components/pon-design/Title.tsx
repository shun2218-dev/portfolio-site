import { ElementType, FC, memo, useMemo } from 'react'
import styles from '~/styles/pon-design/Title.module.scss'

type Props = {
  title: string
  subTitle?: string
  className?: string | string[]
  page?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Title: FC<Props> = ({ title, subTitle, className = '', page = false, as: Heading = 'h2' }) => {
  const classes = () => {
    if (typeof className === 'string') {
      return styles[className]
    } else {
      return className.map((c) => styles[c]).join(' ')
    }
  }

  return (
    <Heading className={[styles['c-title'], page && styles['c-title--page'], classes()].join(' ')}>
      {title}
      {subTitle && <span className={styles['c-hero__sub-title']}>{subTitle}</span>}
    </Heading>
  )
}

export { Title }
