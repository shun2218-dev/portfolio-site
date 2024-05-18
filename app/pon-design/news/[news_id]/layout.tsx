import { Metadata } from 'next'
import { FC, ReactNode } from 'react'
import { MetaProps, NewsInfo } from '~/types/pon-design'
export async function generateMetadata({ params }: Omit<MetaProps, 'searchParams'>): Promise<Metadata> {
  const API_URL = `${process.env.VERCEL_ENV === 'development' ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_SITE_URL_PON}/api/pon-design/news/${params.news_id ?? 'web-magazine'}`
  const response = await fetch(API_URL)
  const data: NewsInfo = await response.json()

  const siteName = data.title
  const url = `${process.env.NEXT_PUBLIC_SITE_URL_PON}/news/${params.news_id}`
  const description = 'This page is a news article page of PON DESIGN'

  return {
    title: `${siteName} | PON DESIGN`,
    description,
    openGraph: {
      title: `${siteName} | PON DESIGN`,
      description,
      url,
      siteName,
      locale: 'ja_JP',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${siteName} | PON DESIGN`,
      description,
      site: '',
      creator: '',
    },
  }
}

type Props = {
  children: ReactNode
}

const NewsDetailLayout: FC<Props> = ({ children }) => {
  return <>{children}</>
}

export default NewsDetailLayout
