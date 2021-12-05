import * as React from "react"
import Layout from "../components/Layout.ja"
import { StaticImage } from "gatsby-plugin-image"
import Contact from "../components/Contact/Contact.ja"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"

const contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <Layout>
        <SimpleBanner title="問い合わせ">
          <StaticImage
            className="banner__image"
            src="../images/support.jpg"
            alt="Support Desk"
          />
        </SimpleBanner>
        <Contact />
      </Layout>
    </>
  )
}

export default contact
