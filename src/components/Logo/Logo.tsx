import { FC } from "react"

import styles from "./Logo.module.scss"

const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <span className={styles.logo_text}>
        <span className={styles.logo_no_part}>No</span>
        thing.
      </span>
    </div>
  )
}
export default Logo
