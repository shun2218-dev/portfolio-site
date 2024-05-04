import { DUMMY_NEWS_LIST } from '~/app/_const/pon-design/DUMMY_NEWS_LIST'
import { NextResponse } from 'next/server'
import { NewsInfo } from '~/types/pon-design'

export function GET() {
  const newsList: NewsInfo[] = [...DUMMY_NEWS_LIST]

  return NextResponse.json(newsList)
}
