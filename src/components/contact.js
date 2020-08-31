import React from "react"
import styled from "@emotion/styled"
import SectionContainer from "./common/SectionContainer"
import { breakpoints } from "../utils"
import { Title, GithubIcon, LinkedinIcon, EnvelopeIcon } from "./common"

const ContactContainer = styled.div`
  font-size: 1.25rem;
  margin: 0 auto;
  ul {
    list-style: none;
    flex-direction: column;
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      width: 80%;
      margin-bottom: 1rem;
      @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        margin-bottom: 0.3rem;
        svg {
          width: 24px;
          height: 24px;
        }
      }
      div {
        margin-right: 0.5rem;
      }
    }
  }
`
export default function Skills() {
  return (
    <SectionContainer gridArea="cntc">
      <Title>Contact</Title>
      <ContactContainer>
        <ul>
          <li>
            <EnvelopeIcon />
            santi.vallejo@gmail.com
          </li>
          <li>
            <GithubIcon /> GitHub
          </li>
          <li>
            <LinkedinIcon />
            LinkedIn
          </li>
        </ul>
      </ContactContainer>
    </SectionContainer>
  )
}
