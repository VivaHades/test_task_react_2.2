import { FC } from "react"

import styles from "./Card.module.scss"

interface IProps {
  content: {
    id: number
    userId: number
    title: string
    body: string
  }
}

const Card: FC<IProps> = (props) => {
  const { content } = props
  return (
    <div className={`${styles.card} ${styles.card}`}>
      <span className={styles.card_id}>
        <span className={styles.card_label}>ID:</span>
        <span className={styles.card_content}>{content.id}</span>
      </span>
      <span>
        <span className={styles.card_label}>User ID:</span>
        <span className={styles.card_content}>{content.userId}</span>
      </span>
      <span>
        <span className={styles.card_title_content}>{content.title}</span>
      </span>
      <span>
        <span className={styles.card_content}>{content.body}</span>
      </span>
    </div>
  )
}

export default Card
