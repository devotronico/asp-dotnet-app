import React from "react"
import styles from "./flag.module.css"

export const Flag = () => {
  return (
    <div className={styles.flag}>
      <div className={styles.left}></div>
      <div className={styles.middle}></div>
      <div className={styles.right}></div>
    </div>
  )
}

export default Flag
