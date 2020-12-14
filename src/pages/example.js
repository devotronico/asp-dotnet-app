import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import styles from "./example.module.css"
const getData = graphql`
  query MiaQuery {
    site {
      siteMetadata {
        author
        description
        hobby
        motto
        title
        person {
          age
          gender
        }
      }
      buildTime
    }
  }
`

const Example = () => {
  const {
    site: {
      siteMetadata: {
        author,
        description,
        hobby,
        motto,
        title,
        person: { age, gender },
      },
      buildTime,
    },
  } = useStaticQuery(getData)
  // const data = useStaticQuery(getData)

  return (
    <Layout>
      <div className={styles.sfondo}>
        <p>
          <span>author: </span>
          {author}
        </p>
        <p>
          <span>description: </span>
          {description}
        </p>
        <p>
          <span>hobby: </span>
          <ul>
            {hobby.map(h => (
              <li>{h}</li>
            ))}
          </ul>
        </p>
        <p>
          <span>motto: </span>
          {motto}
        </p>
        <p>
          <span>title: </span>
          {title}
        </p>
        <p>
          <span>age: </span>
          {age}
        </p>
        <p>
          <span>gender: </span>
          {gender}
        </p>
        <p>
          <span>buildTime: </span>
          {buildTime}
        </p>
      </div>
    </Layout>
  )
}

export default Example
