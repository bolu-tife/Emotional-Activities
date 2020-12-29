import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


export default function About({ data }) {
  return (
    <Layout>
    <SEO title="About" />
      <h3  >About {data.site.siteMetadata.title}</h3>
      <p>
         Don't know what to do? We've got you covered with fun and goofy things to do relative to your emotions!
      </p>
      
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`