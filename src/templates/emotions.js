import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Faamg({ data }) {
  const post = data.markdownRemark
  return (

    <Layout>
    <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div>
        <h3>{post.frontmatter.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }}  />

        <br />
        
      <Link 
          to={`/`}>
          <button className="whitebutton" aria-label="Return to Home Page">
            Go back
          </button>
      </Link>
      </div>
      
    </Layout>

   
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`