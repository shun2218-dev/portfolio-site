import styles from '~/styles/top/SkillsSection.module.scss'
import utils from '~/styles/top/utilities.module.scss'
import { Skill } from '~/types/top'
import { FaGithub, FaReact, FaVuejs, FaDocker, FaFigma, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiNextdotjs, SiSass, SiTailwindcss, SiBootstrap } from 'react-icons/si'
import { CgBrowser } from 'react-icons/cg'

export const SkillsSection = () => {
  const skills: { category: string; items: Skill[] }[] = [
    {
      category: 'Languages',
      items: [
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'HTML', icon: <SiHtml5 /> },
        { name: 'CSS', icon: <SiCss3 /> },
      ],
    },
    {
      category: 'Frameworks/Libraries',
      items: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Vue.js', icon: <FaVuejs /> },
      ],
    },
    {
      category: 'CSS & Styling',
      items: [
        { name: 'Sass/SCSS', icon: <SiSass /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        // { name: 'Emotion', icon: <SiEmotion /> },
        { name: 'Bootstrap5', icon: <SiBootstrap /> },
      ],
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Figma', icon: <FaFigma /> },
        { name: 'GitHub', icon: <FaGithub /> },
        // { name: 'VS Code', icon: <SiVisualstudiocode /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'Chrome拡張', icon: <CgBrowser /> },
      ],
    },
  ]

  return (
    <section id="skills" className={`${styles.skillsSection} ${utils.container}`}>
      <h2 className={utils.sectionTitle}>Skills</h2>
      <div className={styles.skillsContainer}>
        {skills.map((skillGroup) => (
          <div key={skillGroup.category}>
            <h3 className={styles.skillCategoryTitle}>{skillGroup.category}</h3>
            <div className={styles.skillList}>
              {skillGroup.items.map((skill) => (
                <div key={skill.name} className={styles.skillItem}>
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
