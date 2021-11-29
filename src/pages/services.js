import * as React from "react"
import Layout from "../components/Layout"
import Features from "../components/Products/Products"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import { StaticImage } from "gatsby-plugin-image"

const products = () => {
  return (
    <>
      <Seo title="Services" />
      <Layout>
        <SimpleBanner title="All Services">
          <StaticImage
            className="banner__image"
            src="../images/servicelist.jpg"
            alt="Servicelist"
          />
        </SimpleBanner>
        <Features />
      </Layout>
    </>
  )
}

export default products
