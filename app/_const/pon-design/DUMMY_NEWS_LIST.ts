import { NewsInfo } from '~/types/pon-design'

const DUMMY_NEWS = {
  dateTime: { year: '2030', month: '02', day: '01' },
  label: 'お知らせ',
  title: 'テキストが入りますテキストが入りますテキストが入りますテキストが入ります',
}

export const DUMMY_NEWS_LIST = [
  { id: 'web-magazine', title: 'Webデザインニュースサイト「ウェブマガジン」に取材いただきました', dateTime: { year: '2030', month: '02', day: '01' }, label: 'お知らせ' },
  { id: 'smoothiesta', title: 'Smoothiesta様のWebサイトを制作いたしました', dateTime: { year: '2030', month: '01', day: '25' }, label: '制作実績' },
  { id: 'recruit_designer', title: 'Webデザイナーを１名募集中です！', dateTime: { year: '2030', month: '01', day: '20' }, label: '採用' },
  ...[...Array(17)].map((_, i) => ({ id: `dummy_${i}`, ...DUMMY_NEWS }) as NewsInfo),
]
