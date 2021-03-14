import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import {
  breakpoints,
  defaultGithubLink,
  linkedinLink,
  generateMailto,
  emailobj,
} from "../utils"
import {
  Title,
  GithubIcon,
  LinkedinIcon,
  EnvelopeIcon,
  IconLink,
} from "./common"
import { useTranslation } from "react-i18next"
import { translateKeys } from "../constants/translate-keys"

export default function Contact({ title = true, fullEmail }) {
  const { t } = useTranslation()

  return (
    <>
      {title && (
        <Title
          css={css`
            h2 {
              font-family: var(--font-primary);
            }
          `}
        >
          {t(translateKeys.CONTACT)}
        </Title>
      )}

      <ContactContainer>
        <ul className="contact">
          <li>
            <IconLink href="#" onClick={generateMailto} hover>
              <EnvelopeIcon />
              {fullEmail ? (
                <GeneratedEmail
                  data-name={emailobj.name}
                  data-domain={emailobj.domain}
                  data-tld={emailobj.tld}
                />
              ) : (
                <span>E-Mail</span>
              )}
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

const GeneratedEmail = styled.span`
  ::after {
    content: attr(data-name) "@" attr(data-domain) "." attr(data-tld);
  }
`

const ContactContainer = styled.div`
  font-size: 1.125rem;
  margin: 0 auto;
  ul {
    list-style: none;
    flex-direction: column;
    display: flex;
    align-items: center;
    padding-left: 1rem;

    li {
      width: 90%;
      max-width: 300px;
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
        margin-right: 0.7rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: calc(0.7rem + 0.5vw);
    ul {
      align-items: flex-start;
    }
  }
`
