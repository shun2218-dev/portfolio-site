import { MetadataRoute } from 'next'
import { DUMMY_NEWS_LIST } from '~/app/_const/pon-design/DUMMY_NEWS_LIST'
import { DateTime } from '~/types/pon-design'

export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  const generateDatetime = (news_date: DateTime) => {
    const date = new Date()
    date.setFullYear(parseInt(news_date.year))
    date.setMonth(parseInt(news_date.month) - 1)
    date.setDate(parseInt(news_date.day))
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    return date
  }
  return [...DUMMY_NEWS_LIST].map((data) => ({ id: data.id, date: generateDatetime(data.dateTime) }))
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  // Google's limit is 50,000 URLs per sitemap
  const newsList = await generateSitemaps()
  return newsList.map((news) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL_PON!}/news/${id}`,
    lastModified: news.date,
  }))
}
