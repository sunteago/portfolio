import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { breakpoints } from "../utils"

import BackgroundImage from "gatsby-background-image"
import TopNav from "../components/top-nav"
import RightNav from "../components/right-nav"
import Footer from "../components/footer"

const BackgroundImg = styled(BackgroundImage)`
  background: unset;
  background-color: var(--light);
  height: 100%;
`

const PageContainer = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "pres pres pres netwrk"
    "wrk wrk wrk wrk"
    "skls skls skls skls"
    "cntc cntc cntc cntc"
    "fotr fotr fotr fotr";

  width: 100%;
  height: 100%;
  padding: 2rem;
  grid-gap: 5rem 2rem;
  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas:
      ". . lang . . . . . . . netwrk rnav"
      ". . pres pres pres pres pres . . . . rnav"
      ". . wrk wrk wrk wrk . skls skls . . rnav "
      ". . wrk wrk wrk wrk . cntc cntc . . rnav "
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
          }

          body {
            font-family: Raleway, sans-serif;
            color: var(--dark);
            min-height: 100vh;
            @media (min-width: ${breakpoints.md}) {
              height: 100vh;
              overflow: hidden;
            }
          }
        `}
      />
      <BackgroundImg Tag="section" fluid={image.sharp.fluid} fadeIn>
        <PageContainer>
          <TopNav />
          {children}
          <RightNav />
        </PageContainer>
        <Footer />
      </BackgroundImg>
    </>
  )
}
