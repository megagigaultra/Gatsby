import React from 'react'
import { graphql } from 'gatsby'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query($slug: String){
        blog: contentfulBlogPost(slug: {eq: $slug}){
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body{
                raw
                references {
                    ... on ContentfulAsset {
                        contentful_id
                        __typename
                        fixed(width: 1600) {
                        width
                        height
                        src
                        srcSet
                        }
                    }
                }
            }
        }
    }
`

const Blog = ({ data: { blog }}) => {

    const Bold = ({ children }) => <span style={{fontWeight:"bold"}}>{children}</span>
    const Text = ({ children }) => <p className="align-center">{children}</p>

    const options = {
        renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        },
        renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        [BLOCKS.EMBEDDED_ASSET]: node => {
            return (
            <>
                <img
                    src={node.data.target.fixed.src}
                    alt={node.data.target.title}
                />
            </>
            )
        },
        },
    }

    return (
        <Layout>
            <Head title={blog.title} />
            <h1>{blog.title}</h1>
            <p>{blog.publishedDate}</p>
            {renderRichText(blog.body, options)}
        </Layout>
    )
}

export default Blog