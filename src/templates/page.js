import React from "react"
import { graphql } from "gatsby"
import DOMPurify from "dompurify";
import Layout from "./../components/layout"
import SEO from "./../components/seo"

const Page = (props) => {
    const StaticPage = props.data.wordpressPage
    return <Layout>
        <SEO title={StaticPage.title} />
        <h1>{StaticPage.title}</h1>
        <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(StaticPage.content)}} />
    </Layout>
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`
