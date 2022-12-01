import { Card } from './Card/Card'
import styles from './Journal.module.scss'

import img from '../../../assets/images/journal-img.png'

export const Journal = () => {
  return (
    <div className={styles.journal}>
      <p className={styles.title}>Собрали все самое полезное</p>
      <div className={styles.cards}>
        <Card
          img={img}
          title="Заказать настройку контекстной рекламы яндекс директ"
          description="Для чего следует заказать контекстную рекламу Яндекс.Директ?"
          tag="название тега"
        />
        <Card
          img={img}
          title="Заказать настройку контекстной рекламы яндекс директ"
          description="Для чего следует заказать контекстную рекламу Яндекс.Директ?"
          tag="название тега"
        />
        <Card
          img={img}
          title="Заказать настройку контекстной рекламы яндекс директ"
          description="Для чего следует заказать контекстную рекламу Яндекс.Директ?"
          tag="название тега"
        />
      </div>
    </div>
  )
}
