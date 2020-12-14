import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout/Layout"
import Image from "gatsby-image"

import styles from "./detergenti-template.module.css"

const ComponentName = ({
  data: {
    detergente: {
      slug,
      prezzo,
      titolo,
      informazioni: { informazioni },
      immagine: { fixed },
    },
  },
}) => {
  return (
    <Layout>
      <div className={styles.link}>
        <Link to="/detergenti">mostra tutti i detergenti</Link>
      </div>
      <section className={styles.product}>
        <article>
          <Image fixed={fixed} alt={titolo} />
        </article>
        <article>
          <h1>{titolo}</h1>
          <h3>{prezzo}</h3>
          <p>{informazioni}</p>
          <button>ACQUISTA</button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetDetergente($slug: String) {
    detergente: contentfulDetergentiMotore(slug: { eq: $slug }) {
      slug
      prezzo
      titolo
      informazioni {
        informazioni
      }
      immagine {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default ComponentName
