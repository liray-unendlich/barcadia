import * as React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"

const BasicTextModule = () => {
  return (
    <BasicTextModuleStyles>
      <div className="container">
        <h2>
          We are enthusiast of blockchain, especially blockchain infrastructure.
        </h2>
        <p>
        We are contributing to the blockchain infrastructure with hosting several nodes.
        </p>
        <p style={{ marginBottom: "10px" }}>
        In the other words, we support community members and developers.
        </p>
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
