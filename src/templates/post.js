import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "./../components/layout"
import SEO from "./../components/seo"

const Post = (props) => {
    const post = props.data.wordpressPost
    return <Layout>
        <SEO title={post.title} />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{__html: post.content}} />
    </Layout>
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
