import { Metadata } from 'next'
import { FC, ReactNode } from 'react'

const siteName = 'CONTACT'
const description = 'This page is a contact page of PON DESIGN'
const url = `${process.env.SITE_URL_PON}/contact`

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

const ContactLayout: FC<Props> = ({ children }) => {
  return <>{children}</>
}

export default ContactLayout
