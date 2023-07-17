import { Metadata } from 'next'
import { FC, ReactNode } from 'react'

const siteName = 'RECRUIT'
const description = ''
const url = `${process.env.SITE_URL_PON}/recruit`

export const metadata: Metadata = {
  title: siteName,
  description,
  openGraph: {
    title: `${siteName} | PON DESIGN`,
    description,
    url,
    siteName,
    type: 'article',
  },
  twitter: {
    title: `${siteName} | PON DESIGN`,
    description,
  },
}

type Props = {
  children: ReactNode
}

const RecruitLayout: FC<Props> = ({ children }) => {
  return <>{children}</>
}

export default RecruitLayout
