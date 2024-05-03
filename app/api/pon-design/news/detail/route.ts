import { NextResponse } from 'next/server'
import { DUMMY_NEWS_LIST } from '~/app/_const/pon-design/DUMMY_NEWS_LIST'
import { NewsInfo } from '~/types/pon-design'

const newsData: NewsInfo[] = [
  { id: 'web-magazine', title: 'Webデザインニュースサイト「ウェブマガジン」に取材いただきました', dateTime: { year: '2030', month: '02', day: '01' }, label: 'お知らせ' },
  { id: 'smoothiesta', title: 'Smoothiesta様のWebサイトを制作いたしました', dateTime: { year: '2030', month: '01', day: '25' }, label: '制作実績' },
  { id: 'recruit_designer', title: 'Webデザイナーを１名募集中です！', dateTime: { year: '2030', month: '01', day: '20' }, label: '採用' },
  ...DUMMY_NEWS_LIST,
]

const getNewsData = async (news_id: string): Promise<NewsInfo> => {
  const data = newsData.find((news) => news.id === news_id)
  if (data) {
    return data
  } else {
    throw new Error('Invalid news id', { cause: `Not Found news: ${news_id}` })
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const newsId = searchParams.get('news_id')!
  try {
    const data = await getNewsData(newsId)
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}
