import React from "react"
import Logo from "./Logo/Logo"
import Title from "./Title/Title"
import Navigation from "./Navigation/Navigation"

import styles from "./header.module.css"

const Header = ({ title, motto }) => {
  return (
    <header>
      <div className={styles.row}>
        <Logo />
        <Title title={title} motto={motto} />
      </div>
      <div className={styles.divisor}></div>
      <div className={styles.row}>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
