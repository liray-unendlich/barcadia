import * as React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Feature = ({ feature }) => {
  const { name, slug, images, excerpt } = feature
  const image = getImage(images[0])

  return (
    <aside className="features__item">
      <Link to={`/ja/services/${slug}`}>
        <GatsbyImage
          className="features__item--img"
          image={image}
          alt="サービスイメージ"
        />
        <div className="features__item--content">
          {name && <h2>{name}</h2>}
          {excerpt && <p>{excerpt}</p>}
          <Button text="読む" as="span" />
        </div>
      </Link>
    </aside>
  )
}

export default Feature
