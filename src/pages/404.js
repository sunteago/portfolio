import React, { useEffect } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImg from "gatsby-background-image"
import { breakpoints } from "../utils"
import { Title } from "../components/common"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import translateKeys from "../constants/translate-keys"
import { Helmet } from "react-helmet"

export default function NotFound404({ navigate }) {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "404.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 3000)
    return () => clearTimeout(timer)
  }, [navigate])

  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t(translateKeys.NOT_FOUND)}</title>
      </Helmet>
      <NotFoundPageContainer>
        <Title
          heading="h1"
          css={css`
            h1 {
              font-size: calc(0.5vw + 2.5rem);
            }
          `}
        >
          {t(translateKeys.ERROR_404)}
        </Title>
        <Paragraph>{t(translateKeys.NOT_FOUND)}</Paragraph>
        <Paragraph>
          {t(translateKeys.REDIRECTING_TO)}
          <Link
            css={css`
              color: var(--secondary);
              text-decoration: none;
              font-weight: bold;
            `}
            to="/"
          >
            {t(translateKeys.HERE)}
          </Link>
        </Paragraph>
      </NotFoundPageContainer>
      <BackgroundImg
        Tag="section"
        fluid={image.sharp.fluid}
        NotFoundPageContainer
        css={css`
          position: fixed !important;
          width: 100vw;
          height: 100%;
          top: 0;
          left: 0;
          filter: opacity(30%);
          z-index: -100;
        `}
      />
    </>
  )
}

const NotFoundPageContainer = styled.div`
  grid-area: 1 / 1 / -1 / -1;
  margin: 3rem auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding-bottom: 5rem;
  @media (min-width: ${breakpoints.md}) {
    margin: 0 auto;
    width: 50%;
  }
`

const Paragraph = styled.p`
  font-size: calc(0.5vw + 1.2rem);
`
