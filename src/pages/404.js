import React, { useEffect } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImg from "gatsby-background-image"
import { breakpoints } from "../utils"
import { Title } from "../components/common"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

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
  }, [])

  return (
    <>
      <NotFoundPageContainer>
        <Title
          heading="h1"
          css={css`
            h1 {
              font-size: 3.5rem;
            }
          `}
        >
          Error 404
        </Title>
        <Paragraph>This page could not be found.</Paragraph>
        <Paragraph>
          You will be redirected to home. If you are not redirected, please
          click{" "}
          <Link
            css={css`
              color: var(--dark);
            `}
            to="/"
          >
            here
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
          height: 100vh;
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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 5rem;
`

const Paragraph = styled.p`
  font-size: 1.5rem;
`
