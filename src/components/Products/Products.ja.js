import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ProductsStyles } from "./ProductsStyles"
import Product from "./Product.ja"

const getProducts = graphql`
  query {
    products: allContentfulProducts (
      filter: { node_locale: { eq: "ja-JP" } }
    ) {
      edges {
        node {
          name
          price
          excerpt
          contentful_id
          slug
          description {
            description
          }
          images {
            gatsbyImageData(width: 600, layout: CONSTRAINED, formats: [AUTO, WEBP])
          }
        }
      }
    }
  }
`

const Features = () => {
  const response = useStaticQuery(getProducts)
  const products = response.products.edges

  return (
    <ProductsStyles>
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
