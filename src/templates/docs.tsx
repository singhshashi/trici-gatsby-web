import React from "react"
import { Stack, Text, Link, FontWeights } from "@fluentui/react"
import "./docs.css"
import { themes } from "../common/themes"
import Layout from "../components/layout/layout"
import DocsNav from "../components/docs/docsnav/docsnav"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        lastUpdatedDate
      }
      html
      fields {
        slug
      }
    }
  }
`

const Docs: React.FunctionComponent = (props) => {
  console.log("Docs.props:", props);
  return (
    <Layout>
      <div className="docsContainer">
        <div className="navMenu">
          <DocsNav selectedNode={props.data.markdownRemark.fields.slug} />
        </div>
        <div className="docsContent" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}>
        </div>
        <div className="docNav" />
      </div>
    </Layout>
  )
}

export default Docs