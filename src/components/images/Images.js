import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./images.module.css"
import img from "../../images/logo-iceberg.svg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "liquimoly.png" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "liquimoly.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    example: file(relativePath: { eq: "liquimoly.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export const Images = () => {
  const data = useStaticQuery(getImages)

  return (
    <section className={styles.Images}>
      <article className={styles.Images}>
        <h3 className={styles.Images}>basic image</h3>
        <img src={img} widt="100%" alt="basic" />
      </article>
      <article className={styles.Images}>
        <h3 className={styles.Images}>fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className={styles.Images}>
        <h3 className={styles.Images}>fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </article>
      <article className={styles.Images}>
        <h3 className={styles.Images}>fluid image/svg</h3>
        <Image fluid={data.example.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Images
