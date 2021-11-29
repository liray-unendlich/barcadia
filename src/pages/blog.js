import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"

const blog = () => {
  return (
    <>
      <Seo title="Blog" />
      <Layout>
        <SimpleBanner title="Our Blog">
          <StaticImage
            className="banner__image"
            src="../images/bookshelf.jpg"
            alt="bookshelf"
          />
        </SimpleBanner>
      </Layout>
    </>
  )
}

export default blog
