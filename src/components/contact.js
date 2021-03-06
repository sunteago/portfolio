import React from "react"
import styled from "@emotion/styled"
import SectionContainer from "./common/SectionContainer"
import {
  breakpoints,
  defaultGithubLink,
  linkedinLink,
  contactMail,
} from "../utils"
import { Title, GithubIcon, LinkedinIcon, EnvelopeIcon } from "./common"

const ContactContainer = styled.div`
  font-size: 1.125rem;
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
      margin-bottom: 0.3rem;

      @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        svg {
          width: 24px;
          height: 24px;
        }
      }
      &:first-of-type div {
        margin-right: 1rem;
      }
      div {
        margin-right: 0.5rem;
      }
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: calc(0.7rem + 0.5vw);
  }
`
export default function Skills() {
  return (
    <SectionContainer gridArea="cntc">
      <Title>Contact</Title>
      <ContactContainer>
        <ul>
          <li>
            <EnvelopeIcon link={contactMail} hover />
            santi.vallejo@gmail.com
          </li>
          <li>
            <GithubIcon link={defaultGithubLink} hover /> GitHub
          </li>
          <li>
            <LinkedinIcon link={linkedinLink} hover />
            LinkedIn
          </li>
        </ul>
      </ContactContainer>
    </SectionContainer>
  )
}
