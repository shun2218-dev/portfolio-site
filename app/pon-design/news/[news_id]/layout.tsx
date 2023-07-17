import { Metadata } from 'next'
import { FC, ReactNode } from 'react'
import { getNewsTitle } from '~/lib/getNewsTitle'
import { MetaProps } from '~/types/pon-design'

export async function generateMetadata({ params }: Omit<MetaProps, 'searchParams'>): Promise<Metadata> {
  const news_id = params.news_id
  const { fetchHandler } = getNewsTitle()
  const result = await fetchHandler(news_id)
  const siteName = result.title
  const url = `${process.env.SITE_URL_PON}/news/${params.news_id}`
  const description = ''

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
