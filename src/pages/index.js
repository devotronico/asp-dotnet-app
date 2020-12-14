import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import Gif from "./Gif/Gif"
import Marchi from "./Marchi/Marchi"

import styles from "./style.module.css"

const Home = ({ data }) => {
  return (
    <Layout>
      <h4 className={styles.test}>
        Auf unserer Website bieten wir Produkte für die Wartung und Pflege von
        Autos an.
      </h4>
      <Gif />
      <h4 className={styles.test}>
        Die besten Autopflegeprodukte, die besten Marken und Bewertungen sind
        eine Garantie.
      </h4>
      <Marchi />
      {/* <p>{data.site.siteMetadata.description}</p> */}
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default Home
