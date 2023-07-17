import Link from 'next/link'
import { FC, memo } from 'react'
import styles from '~/styles/pon-design/Hero.module.scss'
import { Breadcrumb } from './Breadcrumb'
import { Title } from './Title'

type Props = {
  title: string
  subTitle: string
}

const HeroMemo: FC<Props> = ({ title, subTitle }) => {
  return (
    <section className={styles['c-hero']}>
      <div className={styles['c-hero__inner']}>
        <Title title={title} subTitle={subTitle} page />
      </div>
      <Breadcrumb />
    </section>
  )
}

const Hero = memo(HeroMemo)
export { Hero }
