import React from "react"
import gif from "../../images/tenor.gif"

import styles from "./gif.module.css"

const Gif = () => {
  return (
    <div className={styles.gifBox}>
      <img className={styles.gif} src={gif} alt="Mercedes Gif" />
    </div>
  )
}

export default Gif
