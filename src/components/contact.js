import React from "react"
import styled from "@emotion/styled"
import SectionContainer from "./common/SectionContainer"
import {
  breakpoints,
  defaultGithubLink,
  linkedinLink,
  contactMail,
} from "../utils"
import {
  Title,
  GithubIcon,
  LinkedinIcon,
  EnvelopeIcon,
  IconLink,
} from "./common"

const ContactContainer = styled.div`
  font-size: 1.125rem;
  margin: 0 auto;
  ul {
    list-style: none;
    flex-direction: column;
    display: flex;
    align-items: center;
    li {
      width: 80%;
      margin-bottom: 0.3rem;
      a {
        text-decoration: none;
        display: flex;
        align-items: center;
      }

      @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
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
            <IconLink href={contactMail} hover>
              <EnvelopeIcon />
              <span>E-mail</span>
            </IconLink>
          </li>
          <li>
            <IconLink href={defaultGithubLink} hover>
              <GithubIcon /> <span>Github</span>
            </IconLink>
          </li>
          <li>
            <IconLink href={linkedinLink} hover>
              <LinkedinIcon />
              <span>LinkedIn</span>
            </IconLink>
          </li>
        </ul>
      </ContactContainer>
    </SectionContainer>
  )
}
