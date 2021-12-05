import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ProductsStyles } from "../Products/ProductsStyles"
import Product from "../Products/Product.ja"

const getProducts = graphql`
  query {
    featuredProducts: allContentfulProducts(
      filter: { featured: { eq: true }, node_locale: { eq: "ja-JP" } }
    ) {
      edges {
        node {
          name
          price
          excerpt
          contentful_id
          slug
          images {
            gatsbyImageData(width: 600, formats: [AUTO, WEBP])
          }
        }
      }
    }
  }
`

const Features = () => {
  const response = useStaticQuery(getProducts)
  const products = response.featuredProducts.edges

  return (
    <ProductsStyles>
      <h2>
        ノードフォリオはこちら（バリデータやインデクサー、テストネットを含みます）
      </h2>
      <div className="features__container">
        <div className="features__container--scroll">
          {products.map(({ node }) => {
            return <Product feature={node} />
          })}
        </div>
      </div>
    </ProductsStyles>
  )
}

export default Features
