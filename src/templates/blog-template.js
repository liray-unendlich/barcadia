import * as React from "react"
import Layout from "../components/Layout.ja"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/SEO"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { BlogSingleStyles } from "../components/Blog/BlogStyles"
import Button from "../components/Button/Button"
import BannerModule from "../components/BannerModule/BannerModule"

const Bold = ({ children }) => <strong>{children}</strong>
const Italic = ({ children }) => <em>{children}</em>
const Text = ({ children }) => <p>{children}</p>

const Blog = ({ data }) => {
  const { title, published, richText, images } = data.post

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  }
  const [mainImage, ...productImages] = images
  const image = getImage(mainImage)

  return (
    <>
      <Seo title={title} />
      <Layout>
      <BannerModule
          title={title}
        >
          <GatsbyImage
            className="banner__image"
            image={image}
            alt="Banner Image"
          />
        </BannerModule>
        <section>
          <BlogSingleStyles>
            <h1 className="blogsingle__title">{title}</h1>
            <p className="blogsingle__date">{published}</p>
            <article className="blogsingle__content">
              {renderRichText(richText, options)}
              <div className="blogsingle__back">
                <Button to="/blogs" text="Back to news" as={Link} />
              </div>
            </article>
          </BlogSingleStyles>
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPosts(
      slug: { eq: $slug }
      node_locale: { eq: "en-US" }
      ) {
      title
      published(formatString: "MMMM Do YYYY")
      richText {
        raw
      }
      images {
        gatsbyImageData(width: 2000, formats: [AUTO, WEBP])
      }
    }
  }
`

export default Blog
