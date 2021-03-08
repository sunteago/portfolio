import React, { useState } from "react"
import PageOptionsState from "../context/pageOptionsState"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { breakpoints } from "../utils"
import Particles from "./particles"
import BackgroundImg from "gatsby-background-image"
import Footer from "../components/footer"
import PageNavigation from "../components/nav/navigation"
import PageContainer from "./layout/page-container"
import { colors } from "../constants/colors"
import { fonts } from "../constants/fonts"

const initialPageOptions = {
  darkMode: false,
  lang: "en",
}

export default function Layout({ children, pageContext }) {
  const { image: backgroundImage } = useStaticQuery(bgImageQuery)
  const [pageOptions, setPageOptions] = useState(initialPageOptions)

  return (
    <>
      <Global styles={globalStyles(pageOptions)} />
      <PageOptionsState
        pageOptions={pageOptions}
        setPageOptions={setPageOptions}
      >
        <BackgroundImage
          Tag="section"
          fluid={backgroundImage.sharp.fluid}
          fadeIn
        >
          <PageContainer pageContext={pageContext}>
            <PageNavigation />
            {children}
          </PageContainer>
          <Footer />
          <Particles />
        </BackgroundImage>
      </PageOptionsState>
    </>
  )
}

const bgImageQuery = graphql`
  query {
    image: file(relativePath: { eq: "asfalt-dark.png" }) {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const BackgroundImage = styled(BackgroundImg)`
  background: unset;
  background-color: var(--primary);
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const globalStyles = pageOptions => css`
  @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400&family=Raleway:wght@300;400;500;700&display=swap");
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: ${pageOptions.darkMode ? colors.BLUE : colors.CREAM};
    --secondary: ${pageOptions.darkMode ? colors.CREAM : colors.BLUE};
    --accent: ${colors.RED};
    --accent-light: ${colors.LIGHTER_RED};
    --radius: 3px;
    --scrollbarBG: ${colors.GREY};
    --thumbBG: ${colors.DARKER_GREY};
    --font-primary: ${fonts.RALEWAY};
    --font-secondary: ${fonts.OSWALD};
  }

  body {
    font-family: var(--font-primary);
    color: var(--secondary);
    background: var(--primary);
    @media (min-width: ${breakpoints.lg}) {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }
  }
`
