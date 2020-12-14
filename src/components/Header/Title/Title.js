import React from "react"
import { Link } from "gatsby"

import styles from "./title.module.css"

const Title = ({ title, motto }) => {
  return (
    <div className={styles.boxTitle}>
      <Link className={styles.title} to="/">
        <h1 className={styles.title}>{title}</h1>
      </Link>
      <p className={styles.motto}>{motto}</p>
    </div>
  )
}

export default Title
