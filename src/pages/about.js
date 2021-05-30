import React from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Title } from "../components/common"
import Contact from "../components/contact"
import { graphql, useStaticQuery } from "gatsby"
import { breakpoints } from "../utils"
import { useTranslation } from "react-i18next"
import translateKeys from "../constants/translate-keys"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

export default function AboutMePage() {
  const { image } = useStaticQuery(profileImageQuery)

  const { t } = useTranslation()

  return (
    // <Layout>
    <>
      <Helmet>
        <title>{t(translateKeys.ABOUT_ME)} - Santiago Vallejo</title>
      </Helmet>

      <Title heading="h1" className="aboutme" css={titleStyle}>
        {t(translateKeys.ABOUT_ME)}
      </Title>

      <ProfileImage fluid={image.sharp.fluid} />
      <AboutMeDescription>
        {t(translateKeys.ABOUT_DESCRIPTION)}
      </AboutMeDescription>

      <ContactContainer>
        <Contact showTitle={false} />
      </ContactContainer>
      {/* // </Layout> */}
    </>
  )
}

AboutMePage.Layout = Layout

const profileImageQuery = graphql`
  query {
    image: file(relativePath: { eq: "profile.jpg" }) {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const ProfileImage = styled(Image)`
  grid-area: 2 / 1 / 3 / 3;
  width: 60%;
  margin: 0 auto;

  @media (min-width: ${breakpoints.lg}) {
    width: 100%;
    grid-area: 3 / 3 / 6 / 6;
    clip-path: polygon(0 0, 100% 0, 86% 100%, 0% 100%);
  }
`

const AboutMeDescription = styled.p`
  grid-area: 3 / 1 / 4 / 3;
  font-size: 1.25rem;
  text-align: center;

  @media (min-width: ${breakpoints.lg}) {
    text-align: right;
    font-size: calc(0.9rem + 0.4vw);
    grid-area: 4 / 6 / 6 / 10;
  }
`

const ContactContainer = styled.div`
  grid-area: 4 / 1 / 5 / 3;

  ul.contact {
    align-items: center;

    li {
      width: 70%;
      max-width: 170px;

      div {
        margin-right: 0.8rem;
      }
    }
  }

  @media (min-width: ${breakpoints.sm}) {
    ul.contact {
      flex-direction: row;
      justify-content: center;

      li {
        width: auto;
        margin: 0 1rem;
      }
    }
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-area: 5 / 6 / 6 / 10;
  }
`

const titleStyle = css`
  h1 {
    font-family: var(--font-secondary);
    font-size: calc(3rem + 1vw);
    font-weight: 300;
    width: 100%;
  }

  grid-area: 1 / 1 / 2 / 3;
  text-align: center;
  margin-top: 7rem;
  margin-bottom: 0;
  align-self: end;

  @media (min-width: ${breakpoints.lg}) {
    margin-top: 0;
    align-self: start;
    display: flex;
    justify-content: flex-end;
    text-align: right;
    grid-area: 3 / 6 / 4 / 10;
  }
`
