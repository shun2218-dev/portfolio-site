import { NextResponse } from 'next/server'
import { DUMMY_NEWS_LIST } from '~/app/_const/pon-design/DUMMY_NEWS_LIST'
import { NewsInfo } from '~/types/pon-design'

type Params = {
  news_id: string
}
const newsData: NewsInfo[] = [...DUMMY_NEWS_LIST]

const getNewsData = async (news_id: string): Promise<NewsInfo> => {
  const data = newsData.find((news) => news.id === news_id)
  if (data) {
    return data
  } else {
    throw new Error('Invalid news id', { cause: `Not Found news: ${news_id}` })
  }
}

export async function GET(_: Request, context: { params: Params }) {
  try {
    const data = await getNewsData(context.params.news_id)
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}
