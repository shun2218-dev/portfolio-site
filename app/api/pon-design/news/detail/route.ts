import { NextResponse } from 'next/server'
import { NewsDetailInfo } from '~/types/pon-design'

const newsData: NewsDetailInfo[] = [
  { id: 'web-magazine', title: 'Webデザインニュースサイト「ウェブマガジン」に取材いただきました', dateTime: { year: '2030', month: '02', day: '01' }, label: 'お知らせ' },
  { id: 'smoothiesta', title: 'Smoothiesta様のWebサイトを制作いたしました', dateTime: { year: '2030', month: '01', day: '25' }, label: '制作実績' },
  { id: 'recruit_designer', title: 'Webデザイナーを１名募集中です！', dateTime: { year: '2030', month: '01', day: '20' }, label: '採用' },
]

const defaultNewsData: NewsDetailInfo = {
  id: '',
  dateTime: { year: '2030', month: '02', day: '01' },
  label: 'お知らせ',
  title: 'テキストが入りますテキストが入りますテキストが入りますテキストが入ります',
}

const getNewsData = async (news_id: string): Promise<NewsDetailInfo> => {
  const data = newsData.filter((news) => news.id === news_id)
  return data.length > 0 ? data[0] : defaultNewsData
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const newsId = searchParams.get('news_id')!
  const data = await getNewsData(newsId)
  return NextResponse.json(data)
}
