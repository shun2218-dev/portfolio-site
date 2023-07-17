import { Metadata } from 'next'
import { FC, ReactNode } from 'react'
import { MetaProps, NewsDetailInfo } from '~/types/pon-design'
export async function generateMetadata({ params }: Omit<MetaProps, 'searchParams'>): Promise<Metadata> {
  const news_id = params.news_id
  const API_URL = `${process.env.NEXT_PUBLIC_SITE_URL_PON}/news/detail?news_id=${news_id}`
  const response = await fetch(API_URL)
  const data: NewsDetailInfo = await response.json()

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
