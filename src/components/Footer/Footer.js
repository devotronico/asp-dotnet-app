import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./footer.module.css"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div className={styles.footer}>
      <p className={styles.author}>
        © 2019 Auto al Top • by {data.site.siteMetadata.author}
      </p>
    </div>
  )
}

export default Footer
