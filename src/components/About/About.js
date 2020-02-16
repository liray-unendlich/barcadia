import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const AboutSection = styled.section`
  background-color: var(--background);
  color: #fff;
`

const GridContainer = styled.div`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
  }
`

const TitleArea = styled.div`
  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }
`

const Title = styled.h2`
  margin-top: 0;
`

const ContentArea = styled.div`
  @media (min-width: 768px) {
    grid-column: 2 / 3;

    p {
      margin-top: 0;
    }
  }
`

const About = () => {
  return (
    <AboutSection className="section-padding">
      <GridContainer className="container">
        <TitleArea>
          <Title>
            A super-fast theme that is easy to get started, using the power of
            GatsbyJS
          </Title>
          <Link className="btn" to="/">
            View Products
          </Link>
        </TitleArea>
        <ContentArea>
          <p>
            Using modern CSS properties such as grid, this theme is optmised for
            speed and mobile devices. Giving users an excellent experience on
            any device. Future-proofing your product.
          </p>
        </ContentArea>
      </GridContainer>
    </AboutSection>
  )
}

export default About
