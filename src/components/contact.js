import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
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

export default function Contact({ title = true }) {
  return (
    <>
      {title ? (
        <Title
          css={css`
            font-family: var(--font-primary);
          `}
        >
          Contact
        </Title>
      ) : null}
      <ContactContainer>
        <ul className="contact">
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
    </>
  )
}

const ContactContainer = styled.div`
  font-size: 1.125rem;
  margin: 0 auto;
  ul {
    list-style: none;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    padding-left: 2rem;

    li {
      width: 50%;
      max-width: 130px;
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
