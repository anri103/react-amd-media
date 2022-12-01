import clsx from 'clsx'
import { ReactSVG } from 'react-svg'
import { useState } from 'react'

import { info } from '../../helpers/info'
import { Activity } from './Activity/Activity'
import { Projects } from './Projects/Projects'
import { Industry } from './Industry/Industry'
import { Reviews } from './Reviews/Reviews'
import { About } from './About/About'
import { Journal } from './Journal/Journal'
import { Content } from './Content/Content'

import styles from './Info.module.scss'

import arrow from '../../assets/icons/arrow.svg'

export const Info = () => {
  const [active, setActive] = useState<number>(0)

  const projectsTitle = (
    <div>
      <span>Проекты</span>
      <span>
        Все проекты
        <ReactSVG src={arrow} />
      </span>
    </div>
  )

  return (
    <div className={styles.info}>
      <div className={styles.wrapper}>
        <ul className={styles.links}>
          {info.map((link, index) => (
            <li
              className={clsx(styles.link, {
                [styles.active]: active === index,
              })}
              onClick={() => setActive(index)}
              key={index}
            >
              {link}
            </li>
          ))}
        </ul>
        <div className={styles.content}>
          {active === 0 && (
            <Content title="Направления деятельности">
              <Activity />
            </Content>
          )}
          {active === 1 && (
            <Content title={projectsTitle}>
              <Projects />
            </Content>
          )}
          {active === 2 && (
            <Content title="Отрасли">
              <Industry />
            </Content>
          )}
          {active === 3 && (
            <Content title="Отзывы">
              <Reviews />
            </Content>
          )}
          {active === 4 && (
            <Content title="Немного о нас">
              <About />
            </Content>
          )}
          {active === 5 && (
            <Content title="Журнал">
              <Journal />
            </Content>
          )}
        </div>
      </div>
    </div>
  )
}
