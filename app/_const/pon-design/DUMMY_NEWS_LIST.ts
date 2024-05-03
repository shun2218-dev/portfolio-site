import { NewsInfo } from '~/types/pon-design'

const DUMMY_NEWS = {
  dateTime: { year: '2030', month: '02', day: '01' },
  label: 'お知らせ',
  title: 'テキストが入りますテキストが入りますテキストが入りますテキストが入ります',
}

export const DUMMY_NEWS_LIST = [...Array(17)].map((_, i) => ({ id: `dummy_${i}`, ...DUMMY_NEWS }) as NewsInfo)
