import React from "react"
import logo from "../../../images/logo_Auto-al-Top_512x512.png"

import styles from "./logo.module.css"

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Iceberg Logo" />
    </div>
  )
}

export default Logo
