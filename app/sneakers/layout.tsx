import { FC, ReactNode } from 'react'
import { Metadata } from 'next'
import { SiteLayout } from '~/components/sneakers/SiteLayout'
import '~/styles/sneakers/globals.scss'

const siteName = 'Sneakers'
const description = 'Sneakers is a fictitious website. This website was created using design comps that can be used as a free portfolio.'
const url = process.env.NEXT_PUBLIC_SITE_URL_PON

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
