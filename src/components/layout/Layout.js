import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import Header from "../Header/Header"
import Flag from "../Flag/Flag"
import Footer from "../Footer/Footer"

import "../../styles/index.css"
import styles from "./layout.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          motto
        }
      }
    }
  `)
  return (
    <div className={[styles.container, styles.containerBg].join(" ")}>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { meta: "description", content: "Sample" },
          { meta: "keywords", content: "sample, something" },
        ]}
      />
      <Header
        title={data.site.siteMetadata.title}
        motto={data.site.siteMetadata.motto}
      />
      <div className={styles.page}>
        <Flag />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
