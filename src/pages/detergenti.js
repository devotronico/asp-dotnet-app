import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout/Layout"
import Image from "gatsby-image"

import styles from "./detergenti.module.css"

const Detergenti = ({ data }) => {
  const {
    allContentfulDetergentiMotore: { nodes: detergenti },
  } = data

  return (
    <Layout>
      <section className={styles.page}>
        {detergenti.map(item => (
          <article key={item.id}>
            <h2>{item.titolo}</h2>
            <div className={styles.immagine}>
              <Image fluid={item.immagine.fluid} alt={item.titolo} />
            </div>
            <h3>
              {item.prezzo}
              <span>Euro</span>
            </h3>
            <Link to={`/detergenti/${item.slug}`}>Dettagli</Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulDetergentiMotore {
      nodes {
        id
        prezzo
        titolo
        slug
        informazioni {
          informazioni
        }
        immagine {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default Detergenti
