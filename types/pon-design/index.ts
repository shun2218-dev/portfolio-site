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
  id: string
  dateTime: DateTime
  label: string
  title: string
}

export type { MetaProps, NewsInfo }
