import * as React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"

const BasicTextModule = () => {
  return (
    <BasicTextModuleStyles>
      <div className="container">
        <h2>
          ブロックチェーンの特に基盤技術部分に注目し、活動を始めました。
        </h2>
        <p>
        様々なノードを運営・ホストすることで、ブロックチェーンインフラへ貢献しています。
        </p>
        <p style={{ marginBottom: "10px" }}>
        言い換えれば、ブロックチェーンのコミュニティや開発者をサポートしています。
        </p>
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
