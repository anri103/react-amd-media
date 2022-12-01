import { ReactNode } from 'react'
import styles from './Content.module.scss'

interface ContentProps {
  title: ReactNode
  children: ReactNode
}

export const Content = ({ title, children }: ContentProps) => {
  return (
    <div className={styles.content}>
      <span className={styles.title}>{title}</span>
      {children}
    </div>
  )
}
