import '~/styles/globals.scss'
import styles from '~/styles/page.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/pon-design" target="_blank">
        pon design
      </Link>
    </main>
  )
}
