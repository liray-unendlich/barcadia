import styled from "styled-components"

export const BannerModuleStyles = styled.section`
  height: 30vh;
  position: relative;
  padding: 30px var(--borderSpacing);
  min-height: 300px;

  @media (min-width: 450px) {
    height: 50vh;
  }

  .container {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .banner__image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }

  .banner__content {
    position: relative;
    z-index: 2;
    max-height: 200px;
    width: 100%;

    h1,
    .price {
      margin-top: 0;
      margin-bottom: 10px;
      font-weight: 700;
      font-size: var(--bannerTitle);
      letter-spacing: -1px;
      margin-bottom: 30px;
    }

    h2 {
      margin-top: 0;
      margin-bottom: 30px;
      font-weight: 300;
      font-size: var(--bannerSubTitle);
      letter-spacing: -0.5px;
    }

    button {
      width: 30px;
      height: 30px;
      background-color: transparent;
      border: none;
      color: #fff;
      font-size: 22px;
      display: flex;
      margin-top: 30px;
    }
  }
`
