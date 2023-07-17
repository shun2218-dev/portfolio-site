import { NextResponse } from 'next/server'
import { NewsInfo } from '~/types/pon-design'

export function GET() {
  const newsList: NewsInfo[] = [
    { title: 'Webデザインニュースサイト「ウェブマガジン」に取材いただきました', dateTime: { year: '2030', month: '02', day: '01' }, label: 'お知らせ', news_id: 'web-magazine' },
    { title: 'Smoothiesta様のWebサイトを制作いたしました', dateTime: { year: '2030', month: '01', day: '25' }, label: '制作実績', news_id: 'smoothiesta' },
    { title: 'Webデザイナーを１名募集中です！', dateTime: { year: '2030', month: '01', day: '20' }, label: '採用', news_id: 'recruit_designer' },
  ]

  return NextResponse.json(newsList)
}
