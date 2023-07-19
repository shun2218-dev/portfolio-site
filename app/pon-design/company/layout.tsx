import { Metadata } from 'next'
import { FC, ReactNode } from 'react'

const siteName = 'COMPANY'
const description = 'This page is a company page of PON DESIGN'
const url = `${process.env.NEXT_PUBLIC_SITE_URL_PON}/company`

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

const CompanyLayout: FC<Props> = ({ children }) => {
  return <>{children}</>
}

export default CompanyLayout
