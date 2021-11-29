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
      <h2 style={{ marginBottom: "5vh", position: "relative"}}>
        Here is backbone service of this site:<br></br>
      </h2>
      <div className="container">
        <Perk
          title="Built For Speed"
          content="By using GatsbyJS, this site is super-fast out of the box"
        >
          <StaticImage
            src="../../images/logos/gatsby-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
        <Perk
          title="Built For Content"
          content="Contentful helps us as headlessCMS"
        >
          <StaticImage
            src="../../images/logos/contentful-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
        <Perk
          title="Built For Security"
          content="A static site reduces chances of a security exposure through injection"
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
