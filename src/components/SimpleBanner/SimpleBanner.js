import * as React from "react"
import { SimpleBannerStyles } from "./SimpleBannerStyles"

const SimpleBanner = ({ children, title }) => {
  return (
    <SimpleBannerStyles>
      {children}

      {title && (
        <div className="container">
          <div className="banner__content">
            <h1>
              {title}
            </h1>
          </div>
        </div>
      )}
    </SimpleBannerStyles>
  )
}

export default SimpleBanner
