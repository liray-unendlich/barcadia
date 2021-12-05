import * as React from "react"
import Layout from "../components/Layout.ja"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule.ja"
import PerksModule from "../components/PerksModule/PerksModule.ja"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features.ja"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="ぐぬのーど"
          subTitle="ぐぬのーど：ホスティングノード＆テストネットの紹介です。"
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
