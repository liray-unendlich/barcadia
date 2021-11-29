import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="gunu-node"
          subTitle="The nodefolio of gunu-node(liray-indexer)"
        />
        <BasicTextModule />
        <Features />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
      </Layout>
    </>
  )
}

export default Index
