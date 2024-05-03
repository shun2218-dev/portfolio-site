import { DUMMY_NEWS_LIST } from '~/app/_const/pon-design/DUMMY_NEWS_LIST'
import { NextResponse } from 'next/server'
import { NewsInfo } from '~/types/pon-design'

export function GET() {
  const newsList: NewsInfo[] = [
    { id: 'web-magazine', title: 'Webデザインニュースサイト「ウェブマガジン」に取材いただきました', dateTime: { year: '2030', month: '02', day: '01' }, label: 'お知らせ' },
    { id: 'smoothiesta', title: 'Smoothiesta様のWebサイトを制作いたしました', dateTime: { year: '2030', month: '01', day: '25' }, label: '制作実績' },
    { id: 'recruit_designer', title: 'Webデザイナーを１名募集中です！', dateTime: { year: '2030', month: '01', day: '20' }, label: '採用' },
    ...DUMMY_NEWS_LIST,
  ]

  return NextResponse.json(newsList)
}
