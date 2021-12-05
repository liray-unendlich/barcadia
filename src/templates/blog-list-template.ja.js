import * as React from "react"
import Layout from "../components/Layout.ja"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import { StaticImage } from "gatsby-plugin-image"
import BlogItem from "../components/Blog/BlogItem.ja"
import BlogItems from "../components/Blog/BlogItems"

const Pagination = styled.aside`
  display: flex;
  margin: 0 auto;
  justify-content: center;

  .btn {
    margin-right: 20px;

    &:hover {
      cursor: pointer;
    }

    &.btn-active {
      color: var(--primary);

      &:after {
        display: none;
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
`

const Blog = props => {
  const { currentPage, numPages } = props.pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const prevPage =
    currentPage - 1 === 1 ? `ja/blogs` : `ja/blogs/${currentPage - 1}`
  const nextPage = `ja/blogs/${currentPage + 1}`
  const { data } = props
  return (
    <>
      <Seo title="Blogs" />
      <Layout>
        <SimpleBanner title="ブログ">
          <StaticImage
            className="banner__image"
            src="../images/bookshelf.jpg"
            alt="Bookshelf"
          />
        </SimpleBanner>
        <BlogItems>
          {data.post.edges.map(({ node }) => {
            return <BlogItem key={node.id} blog={node} />
          })}
        </BlogItems>
        {numPages > 1 && (
          <Pagination>
            {!isFirst && (
              <Link className="btn" to={prevPage}>
                前へ
              </Link>
            )}

            {Array.from({ length: numPages }, (_, i) => {
              return (
                <Link
                  key={i}
                  to={`/ja/blogs/${i === 0 ? "" : i + 1}`}
                  className={i + 1 === currentPage ? "btn btn-active" : "btn"}
                >
                  {i + 1}
                </Link>
              )
            })}
            {!isLast && (
              <Link className="btn" to={nextPage}>
                次へ
              </Link>
            )}
          </Pagination>
        )}
      </Layout>
    </>
  )
}

export const query = graphql`
  query getPostsJa($skip: Int!, $limit: Int!) {
    post: allContentfulPosts(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
      filter: { node_locale: { eq: "ja-JP" } }
    ) {
      edges {
        node {
          slug
          title
          node_locale
          introduction
          postId: contentful_id
          published(formatString: "YYYY/MM/DD")
        }
      }
    }
  }
`
export default Blog
