import { Montserrat } from 'next/font/google'
import { FC, ReactNode } from 'react'
import { Contact } from '~/components/pon-design/Contact'
import { Hero } from '~/components/pon-design/Hero'
import styles from '~/styles/pon-design/Main.module.scss'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
})
type Props = {
  children: ReactNode
  heroArea?: ReactNode
  contact?: boolean
  title?: string
  subTitle?: string
}
const PageLayout: FC<Props> = ({ children, heroArea, contact = true, title, subTitle }) => {
  return (
    <>
      <main className={[styles['l-main'], montserrat.className].join(' ')}>
        {title && subTitle ? <Hero title={title} subTitle={subTitle} /> : heroArea}
        <div className={styles['l-main__inner']}>{children}</div>
        {contact && <Contact font={montserrat} />}
      </main>
    </>
  )
}

export { PageLayout }
