import * as React from "react"
import { Link, navigate } from "gatsby"
import { BannerModuleStyles } from "./BannerModuleStyles"
import { StaticImage } from "gatsby-plugin-image"
import { MdArrowDownward as Arrow } from "react-icons/md"
import Button from "../Button/Button"

const BannerModule = ({ children, title, subTitle, price, enquire }) => {
  function scrollToArea() {
    navigate("#topContent")
  }

  return (
    <>
      <BannerModuleStyles>
        {children ? (
          children
        ) : (
          <StaticImage
            className="banner__image"
            imgClassName="banner__image--content"
            src="../../images/servers.jpg"
            alt="Banner Image"
            layout="fullWidth"
            placeholder="blurred"
          />
        )}

        <div className="container">
          <div className="banner__content">
            {title && (
              <h1>
                {title}
              </h1>
            )}
            {subTitle && <h2>{subTitle}</h2>}
            {price && (
              <h2 className="price">
                Fee rate:{price}
              </h2>
            )}
            {enquire && <Button text="Enquire Now" as={Link} to="/contact" />}
            <button onClick={scrollToArea}>
              <Arrow />
            </button>
          </div>
        </div>
      </BannerModuleStyles>
      <span id="topContent"></span>
    </>
  )
}

export default BannerModule
