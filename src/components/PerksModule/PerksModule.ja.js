import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksModuleStyles } from "./PerksModuleStyles"
import Perk from "./Perk"

const PerksModule = () => {
  return (
    <PerksModuleStyles>
      <StaticImage
        className="perks__image--bg"
        src="../../images/abstract-building.jpg"
        alt="Perks Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <h2>
        このサイトのバックボーンは次の通りです:<br></br>
      </h2>
      <div className="container">
        <Perk
          title="サイトの高速化"
          content="GatsbyJSの使用による表示の高速化"
        >
          <StaticImage
            src="../../images/logos/gatsby-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
        <Perk
          title="コンテンツの管理"
          content="Contentfulによるコンテンツ管理"
        >
          <StaticImage
            src="../../images/logos/contentful-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
        <Perk
          title="セキュリティの向上"
          content="静的サイトによるインジェクション対策"
        >
          <StaticImage
            src="../../images/logos/netlify-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule
