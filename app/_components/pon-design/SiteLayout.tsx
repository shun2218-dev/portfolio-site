import '~/styles/pon-design/globals.scss'
import { Header } from '~/components/pon-design/Header'
import { Footer } from '~/components/pon-design/Footer'
import { Montserrat } from 'next/font/google'
import { FC, ReactNode } from 'react'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
})

type Props = {
  children: ReactNode
}
const SiteLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header font={montserrat} />
      {children}
      <Footer font={montserrat} />
    </>
  )
}

export { SiteLayout }
