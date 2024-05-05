import { FC, memo, ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

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
