import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { breakpoints } from "../utils"

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
    height: 100vh;
    grid-gap: 3rem 2rem;
    grid-template-rows: 120px 2fr 7fr 6fr 1fr;
    grid-template-columns: 2fr repeat(11, 1fr);
    grid-template-areas:
      ". lang . . . . . . . . netwrk netwrk"
      ". . pres pres pres pres pres . . . . rnav"
      ". . wrk wrk wrk wrk wrk skls skls . . rnav "
      ". . wrk wrk wrk wrk wrk cntc cntc . . rnav "
      "src src . . . . . . . . . rnav";
  }

  @media (min-width: ${breakpoints.lg}) {
    height: 100vh;
    grid-gap: 3rem 2rem;
    grid-template-rows: 120px 2fr 7fr 6fr 1fr;
    grid-template-columns: 2fr repeat(11, 1fr);
    grid-template-areas:
      ". lang . . . . . . . . netwrk netwrk"
      ". . pres pres pres pres pres . . . . rnav"
      ". . wrk wrk wrk wrk wrk skls skls . . rnav "
      ". . wrk wrk wrk wrk wrk cntc cntc . . rnav "
      "src src . . . . . . . . . rnav";
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
          @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&family=Raleway:wght@300;400;700&display=swap");
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
      </BackgroundImg>
    </>
  )
}
