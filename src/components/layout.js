import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { breakpoints } from "../utils"
import { GridState } from "../context/gridContext"
import PageContainer from "./page-container"

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
        <GridState>
          <PageContainer>
            <Lang />
            <Networks />
            <Nav />
            {children}
            <SourceCode />
          </PageContainer>
          <Footer />
        </GridState>
        <BackgroundParticles params={particlesConfig} />
      </BackgroundImg>
    </>
  )
}
