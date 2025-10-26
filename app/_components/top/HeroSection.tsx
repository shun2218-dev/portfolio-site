'use client'

import styles from '~/styles/top/HeroSection.module.scss'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { GITHUB_NAME } from '~/app/_const/top/GITHUB_NAME'
import { useEffect, useState } from 'react'

export const HeroSection = () => {
  const [experienceYear, setExperienceYear] = useState(4)

  const calculateExperienceYear = () => {
    const startDate = new Date('2022-04-01')
    const today = new Date()

    let elapsedYears = today.getFullYear() - startDate.getFullYear()

    const monthDiff = today.getMonth() - startDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < startDate.getDate())) {
      elapsedYears--
    }

    setExperienceYear(elapsedYears + 1)
  }

  useEffect(() => {
    calculateExperienceYear()
  }, [])

  return (
    <section id="about" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>{GITHUB_NAME}</h1>
        <h2>可読性と最新技術を追求する、4年目フロントエンドエンジニア</h2>
        <p>
          2022年に新卒でキャリアをスタートし、{experienceYear}年目のフロントエンドエンジニアとして活動しています。
          実務では主にVue.jsを用いた開発に従事しており、コードの可読性を意識した保守性の高い実装を心がけています。 また、業務外でもReactやNext.jsなど新しい技術のキャッチアップを積極的に行っています。
          今後はWebアプリケーション開発の経験を活かしつつ、ゲーム開発やモバイルアプリ開発といった新しい分野にも挑戦していきたいと考えています。
        </p>
        <div className={styles.heroLinks}>
          <Link href={`https://github.com/${GITHUB_NAME}`} target="_blank" rel="noopener noreferrer">
            <FaGithub />
            GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}
