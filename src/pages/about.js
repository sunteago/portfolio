import React from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Title } from "../components/common"
import Contact from "../components/contact"
import { graphql, useStaticQuery } from "gatsby"

export default function About() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "profile.jpg" }) {
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
      <Title
        heading="h1"
        triangle={false}
        className="whoiam"
        css={css`
          &.whoiam {
            font-size: 4.5rem;
            font-weight: 300;
            align-self: end;
          }
          grid-area: 3 / 7 / 4 / 10;
        `}
      >
        Who I am
      </Title>
      <AboutImage fluid={image.sharp.fluid} />
      <AboutDescription>
        I am Santiago Vallejo, a versatile web and mobile
        develoAboutDescriptioner, currently working with React. I do enjoy
        learning new things and I love to meet talented people, In my free time
        I either make music or go for a bike ride. You will find me here:
      </AboutDescription>
      <ContactContainer>
        <Contact title={false} />
      </ContactContainer>
    </>
  )
}

const AboutDescription = styled.p`
  font-size: 1.5rem;
  grid-area: 4 / 6 / 6 / 10;
`

const AboutImage = styled(Image)`
  grid-area: 3 / 3 / 6 / 6;
  clip-path: polygon(0 0, 100% 0, 86% 100%, 0% 100%);
`

const ContactContainer = styled.div`
  grid-area: 5 / 6 / 6 / 10;
  ul.contact {
    flex-direction: row;
    justify-content: center;
    li {
      width: auto;
      margin: 0 1rem;
    }
  }
`
