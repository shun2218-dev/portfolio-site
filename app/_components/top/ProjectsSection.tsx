import { Project } from '~/types/top'
import styles from '~/styles/top/ProjectsSection.module.scss'
import utils from '~/styles/top/utilities.module.scss'
import { ProjectCard } from './ProjectCard'

export const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: 'SNEAKERS (ECサイトデモ)',
      description: 'Next.jsとTypeScriptを使用したECサイトのデモ。商品一覧と詳細ページのルーティングを実装。Tailwind CSSによるスタイリングを行いました。（※仮テキスト）',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      demoUrl: 'https://portfolio-site-dun-rho.vercel.app/sneakers',
      repoPath: 'app/sneakers',
    },
    {
      title: 'Daily Trial (LP模写)',
      description: 'ReactとCSS-in-JS (Emotion) を用いたLPのコーディング。コンポーネント指向の設計を意識し、動きのあるUIを実装しました。（※仮テキスト）',
      tags: ['React', 'Emotion', 'TypeScript'],
      demoUrl: 'https://portfolio-site-dun-rho.vercel.app/daily-trial',
      repoPath: 'app/daily-trial',
    },
    {
      title: 'PON DESIGN (コーポレートサイト模写)',
      description: 'デザインカンプを基に、HTML/Sass/JavaScriptで忠実に再現。BEM記法を採用し、保守性の高いCSS設計を心がけました。（※仮テキスト）',
      tags: ['HTML', 'Sass/SCSS', 'JavaScript'],
      demoUrl: 'https://portfolio-site-dun-rho.vercel.app/pon-design',
      repoPath: 'app/pon-design',
    },
  ]

  return (
    <section id="projects" className={`${styles.projectsSection} ${utils.container}`}>
      <h2 className={utils.sectionTitle}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
