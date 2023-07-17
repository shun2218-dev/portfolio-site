import { FC, ReactNode } from 'react'
import { Metadata } from 'next'
import { SiteLayout } from '~/components/pon-design/SiteLayout'

const siteName = 'PON DESIGN'
const description = ''
const url = process.env.SITE_URL_PON

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '',
    creator: '',
  },
}

type Props = {
  children: ReactNode
}

const PonDesignLayout: FC<Props> = ({ children }) => {
  return <SiteLayout>{children}</SiteLayout>
}

export default PonDesignLayout
