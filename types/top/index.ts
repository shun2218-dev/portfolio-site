import { ReactNode } from 'react'

type Skill = {
  name: string
  icon: ReactNode
}

type Project = {
  title: string
  description: string
  tags: string[]
  demoUrl: string
  repoPath?: string
}

export type { Project, Skill }
