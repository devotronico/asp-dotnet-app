import React from "react"
import { Link } from "gatsby"

import styles from "./navigation.module.css"

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        <li>
          <Link
            className={styles.navItem}
            activeClassName={styles.activeNavItem}
            to="/"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            className={styles.navItem}
            activeClassName={styles.activeNavItem}
            to="/detergenti"
          >
            detergenti
          </Link>
        </li>
        <li>
          <Link
            className={styles.navItem}
            activeClassName={styles.activeNavItem}
            to="/about"
          >
            about
          </Link>
        </li>
        <li>
          <Link
            className={styles.navItem}
            activeClassName={styles.activeNavItem}
            to="/contact"
          >
            contact
          </Link>
        </li>
        <li>
          <Link
            className={styles.navItem}
            activeClassName={styles.activeNavItem}
            to="/immagini"
          >
            immagini
          </Link>
        </li>
        <li>
          <Link
            className={styles.navItem}
            activeClassName={styles.activeNavItem}
            to="/example"
          >
            example
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
