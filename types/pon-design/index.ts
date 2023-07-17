type MetaProps = {
  params: { news_id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

type DateTime = {
  year: string
  month: string
  day: string
}

type NewsInfo = {
  dateTime: DateTime
  label: string
  title: string
  news_id: string
}

type NewsDetailInfo = {
  id: string
  dateTime: DateTime
  label: string
  title: string
}

export type { MetaProps, NewsInfo, NewsDetailInfo }
