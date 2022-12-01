import Marquee from 'react-fast-marquee'

import ecommerce from '../../../assets/images/e-commerce.png'
import seo from '../../../assets/images/seo.png'
import styles from './Activity.module.scss'

export const Activity = () => {
  const technologies = [
    'Node.js',
    'JavaScript / TypeScript',
    'Vue / Vuex',
    'React / Redux',
    'Angular',
    'Laravel',
    'GraphQL',
    'MySQL',
    'MongoDB',
    'ElasticSearch',
    'Memcached',
  ]

  const images = [ecommerce, seo, seo, seo, seo]

  return (
    <div className={styles.activity}>
      <div className={styles.images}>
        {images.map((img, index) => (
          <img src={img} key={index} alt="" />
        ))}
      </div>
      <div>
        <Marquee speed={120}>
          <ul className={styles.list}>
            {technologies.map((item, index) => (
              <li key={index} className={styles.item}>
                {item}
              </li>
            ))}
          </ul>
        </Marquee>
      </div>
    </div>
  )
}
