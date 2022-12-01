import { projects } from '../../../helpers/projects'
import styles from './Projects.module.scss'

export const Projects = () => {
  return (
    <div className={styles.projects}>
      {projects.map((item, index) => (
        <div className={styles.image}>
          <img src={item} key={index} alt="" />
        </div>
      ))}
    </div>
  )
}
