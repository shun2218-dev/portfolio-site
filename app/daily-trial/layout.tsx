import { FC, ReactNode } from 'react'
import { SiteLayout } from '../_components/daily-trial/SiteLayout'
import { Metadata } from 'next'

type Props = {
  children: ReactNode
}

const siteName = 'DAILY TRIAL'
const description = 'DAILY TRIAL is a fictitious website. This website was created using design comps that can be used as a free portfolio.'
const url = process.env.NEXT_PUBLIC_SITE_URL_DAILY_TRIAL

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

const DTLayout: FC<Props> = ({ children }) => {
  return <SiteLayout>{children}</SiteLayout>
}

export default DTLayout
