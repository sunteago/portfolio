import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { breakpoints } from "../utils"

import Particles from "react-particles-js"
import particlesConfig from "../utils/particles.json"
import BackgroundImage from "gatsby-background-image"
import Networks from "./networks"
import Lang from "./lang"
import Nav from "../components/nav/nav"
import Footer from "../components/footer"
import SourceCode from "../components/source-code"

const BackgroundImg = styled(BackgroundImage)`
  background: unset;
  background-color: var(--light);
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "pres pres pres netwrk"
    "wrk wrk wrk wrk"
    "skls skls skls skls"
    "cntc cntc cntc cntc"
    "fotr fotr fotr src";

  width: 100%;
  padding: 2rem;
  grid-gap: 5rem 1rem;

  @media (min-width: ${breakpoints.lg}) {
    padding: 1rem;
    height: 100vh;
    grid-gap: 1rem;
    grid-template-rows: 32px 3fr 1fr 3fr 3fr 1fr;
    grid-template-columns: 2fr repeat(11, 1fr);
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
`

export default function Layout({ children }) {
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

  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&family=Raleway:wght@300;400;500&display=swap");
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
          }

          body {
            font-family: Raleway, sans-serif;
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
        <PageContainer>
          <Lang />
          <Networks />
          <Nav />
          {children}
          <SourceCode />
        </PageContainer>
        <Footer />
        <BackgroundParticles params={particlesConfig} />
      </BackgroundImg>
    </>
  )
}
