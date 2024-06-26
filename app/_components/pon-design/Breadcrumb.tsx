import { memo, useEffect, useMemo, useState } from 'react'
import styles from '~/styles/pon-design/Breadcrumb.module.scss'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useSearchParam } from 'react-use'
import { NewsInfo } from '~/types/pon-design'
import useSWR from 'swr'

type Breadcrumb = {
  label: string
  href: string
  article?: boolean
}

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = (await res.json()) as NewsInfo
  return data
}

const BreadcrumbMemo = () => {
  const pathname = usePathname()
  const params = useParams()
  const [newsTitle, setNewsTitle] = useState<string | null>(null)
  const { data } = useSWR(`/api/pon-design/news/${params.news_id ?? 'web-magazine'}`, fetcher)
  const breadcrumb: Breadcrumb[] = useMemo(() => {
    return pathname
      .split('/')
      .filter((value) => value !== '')
      .map((value, index) => ({ label: index === 0 ? 'HOME' : newsTitle !== null && index === 2 ? newsTitle : value.toUpperCase(), href: index === 0 ? '/pon-design' : `/pon-design/${value}` }))
  }, [newsTitle, pathname])

  useEffect(() => {
    if (data) setNewsTitle(data.title)
  }, [data])
  return (
    <div className={styles['c-breadcrumb']}>
      <ul className={styles['c-breadcrumb__list']}>
        {breadcrumb.map((page, index) => (
          <li className={styles['c-breadcrumb__item']} key={page.label}>
            <Link
              href={index === breadcrumb.length - 1 ? '#' : page.href}
              className={[styles['c-breadcrumb__place'], index === breadcrumb.length - 1 ? styles['c-breadcrumb__place--now'] : styles['c-breadcrumb__place--other']].join(' ')}
            >
              {page.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Breadcrumb = memo(BreadcrumbMemo)
export { Breadcrumb }
