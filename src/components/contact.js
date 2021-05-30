import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import {
  breakpoints,
  defaultGithubLink,
  linkedinLink,
  generateMailto as generateMailTo,
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
import translateKeys from "../constants/translate-keys"

export default function Contact({ showTitle = true, fullEmail }) {
  const { t } = useTranslation()

  let displayEmailText = "E-Mail"

  if (fullEmail) {
    displayEmailText = (
      <DecomposedEmail
        data-name={emailobj.name}
        data-domain={emailobj.domain}
        data-tld={emailobj.tld}
      />
    )
  }

  return (
    <>
      {showTitle && (
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

      {/* Social networks */}
      <ContactOptionList>
        <ContactOptionItem Icon={EnvelopeIcon} onClick={generateMailTo}>
          {displayEmailText}
        </ContactOptionItem>

        <ContactOptionItem Icon={GithubIcon} href={defaultGithubLink}>
          Github
        </ContactOptionItem>

        <ContactOptionItem Icon={GithubIcon} href={linkedinLink}>
          LinkedIn
        </ContactOptionItem>
      </ContactOptionList>
    </>
  )
}

const DecomposedEmail = styled.span`
  ::after {
    content: attr(data-name) "@" attr(data-domain) "." attr(data-tld);
  }
`

const ContactOptionList = ({ children }) => {
  return (
    <div
      css={css`
        font-size: 1.125rem;
        margin: 0 auto;
      `}
    >
      <ul
        className="contact"
        css={css`
          list-style: none;
          flex-direction: column;
          display: flex;
          align-items: center;
          padding-left: 1rem;
          align-items: flex-start;
        `}
      >
        {children}
      </ul>
    </div>
  )
}

const ContactOptionItem = ({ Icon, children, onClick, href }) => (
  <li
    css={css`
      width: 90%;
      max-width: 300px;
      margin-bottom: 0.3rem;
      font-size: 1.25rem;

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
    `}
  >
    <IconLink href={href || "#"} hover onClick={onClick}>
      <Icon /> {children}
    </IconLink>
  </li>
)
