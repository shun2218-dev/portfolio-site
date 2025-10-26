import Link from 'next/link'
import styles from '~/styles/top/ProjectCard.module.scss'
import { Project } from '~/types/top'

export const ProjectCard = ({ project }: { project: Project }) => (
  <div className={styles.projectCard}>
    <div className={styles.cardContent}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className={styles.cardLinks}>
        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={styles.demoLink}>
          デモを見る
        </Link>
        <Link href={`https://github.com/shun2218-dev/portfolio-site${project.repoPath ? '/tree/main/' + project.repoPath : ''}`} target="_blank" rel="noopener noreferrer" className={styles.codeLink}>
          コードを見る
        </Link>
      </div>
    </div>
  </div>
)
