import '~/styles/daily-trial/globals.scss'
import { FC, memo, ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

type Props = {
  children: ReactNode
}

const SiteLayoutMemo: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

const SiteLayout = memo(SiteLayoutMemo)
export { SiteLayout }
