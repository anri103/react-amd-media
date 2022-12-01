import styles from './Industry.module.scss'

import projects200 from '../../../assets/images/200.png'

import {
  industries,
  agro_complex,
  constuction,
  fashion,
  interior,
  jewelry,
  learn,
  medicine,
} from '../../../helpers/industries'

export const Industry = () => {
  return (
    <div className={styles.industry}>
      <ul className={styles.list}>
        <p className={styles.title}>{industries.title}</p>
        {industries.industry.map((item, index) => (
          <li className={styles.item} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <ul className={styles.list}>
        <p className={styles.title}>{agro_complex.title}</p>
        {agro_complex.data.map((item, index) => (
          <li className={styles.item} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <ul className={styles.list}>
        <p className={styles.title}>{constuction.title}</p>
        {constuction.data.map((item, index) => (
          <li className={styles.item} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <ul className={styles.list}>
        <p className={styles.title}>{fashion.title}</p>
        {fashion.data.map((item, index) => (
          <li className={styles.item} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <ul className={styles.list}>
        <p className={styles.title}>{interior.title}</p>
        {interior.data.map((item, index) => (
          <li className={styles.item} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <ul className={styles.list}>
        <p className={styles.title}>{jewelry.title}</p>
        {jewelry.data.map((item, index) => (
          <li className={styles.item} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <ul className={styles.list}>
        <p className={styles.title}>{learn.title}</p>
        {learn.data.map((item, index) => (
          <li className={styles.item} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <ul className={styles.list}>
        <p className={styles.title}>{medicine.title}</p>
        {medicine.data.map((item, index) => (
          <li className={styles.item} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <img src={projects200} alt="" />
    </div>
  )
}
