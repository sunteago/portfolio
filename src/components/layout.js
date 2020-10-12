import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { breakpoints, getGridLayout } from "../utils"

import Particles from "react-particles-js"
import particlesConfig from "../utils/particles.json"
import BackgroundImage from "gatsby-background-image"
import Networks from "./networks"
import PageOptions from "./page-options"
import Nav from "../components/nav/nav"
import Footer from "../components/footer"
import SourceCode from "../components/source-code"
import Brand from "../components/brand"
import SectionWatermark from "../components/section-watermark"

const BackgroundImg = styled(BackgroundImage)`
  background: unset;
  background-color: var(--light);
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const BackgroundParticles = styled(Particles)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
`

const PageContainer = styled.main`
  flex-grow: 1;
  .tl-edges {
    overflow: hidden !important;
    overflow-y: hidden !important;
    pointer-events: none;
  }
  .tl-wrapper {
    > * {
      pointer-events: all;
    }
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-areas:
      "pres netwrk"
      "wrk wrk"
      "skls skls"
      "cntc cntc"
      "fotr fotr";
    width: 100%;
    padding: 2rem;
    grid-gap: ${prp => (prp.layout === "about" ? "1rem" : "2rem 1rem")};

    @media (min-width: ${breakpoints.lg}) {
      padding: 1rem;
      height: 100vh;
      grid-gap: 1rem;
      grid-template-columns: 2fr repeat(11, 1fr);
      grid-template-rows: ${prp => getGridLayout(prp.layout)};
      grid-template-areas:
        ". lang lang . . . . . . . netwrk netwrk"
        ". . pres pres pres pres pres pres . . . rnav"
        ". . . . . . . . . . . rnav"
        ". . wrk wrk wrk wrk wrk skls skls skls skls rnav "
        ". . wrk wrk wrk wrk wrk cntc cntc cntc . rnav "
        ". . . . . . . . . . . rnav";
    }
    @media (min-width: ${breakpoints.xl}) {
      grid-template-areas:
        ". lang lang . . . . . . . netwrk netwrk"
        ". . pres pres pres pres pres . . . . rnav"
        ". . . . . . . . . . . rnav"
        ". . wrk wrk wrk wrk wrk skls skls skls skls rnav "
        ". . wrk wrk wrk wrk wrk cntc cntc cntc . rnav "
        ". . . . . . . . . . . rnav";
    }
  }
  @media (min-height: 768px) {
    padding-top: 1rem;
  }
`

export default function Layout({ children, pageContext }) {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "asfalt-dark.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const { layout, sectionTitle } = pageContext

  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400&family=Raleway:wght@300;400;500;700&display=swap");
          *,
          *::after,
          *::before {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          :root {
            --light: #f5d6ba;
            --dark: #2c2c54;
            --accent: #a40e4c;
            --radius: 3px;
            --scrollbarBG: #cfd8dc;
            --thumbBG: #90a4ae;
            --font-primary: Raleway, Arial, Helvetica, sans-serif, sans-serif;
            --font-secondary: Oswald, "Franklin Gothic Medium", "Arial Narrow",
              Arial, sans-serif;
          }

          body {
            font-family: var(--font-primary);
            color: var(--dark);
            background: var(--light);
            @media (min-width: ${breakpoints.lg}) {
              width: 100vw;
              height: 100vh;
              overflow: hidden;
            }
          }
        `}
      />
      <BackgroundImg Tag="section" fluid={image.sharp.fluid} fadeIn>
        <PageContainer layout={layout || "main"}>
          {layout !== "main" ? <Brand /> : null}
          <PageOptions />
          <Networks />
          <Nav />
          {children}
          <SourceCode />
        </PageContainer>
        {layout !== "main" ? <SectionWatermark title={sectionTitle} /> : null}
        <Footer />
        {/* <BackgroundParticles params={particlesConfig} /> */}
      </BackgroundImg>
    </>
  )
}
