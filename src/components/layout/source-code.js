import React from "react"
import styled from "@emotion/styled"
import { GithubIcon, IconLink } from "../common"
import { breakpoints } from "../../utils"
import { useTranslation } from "react-i18next"
import translateKeys from "../../constants/translate-keys"

export default function SourceCode() {
  const { t } = useTranslation()

  return (
    <SourceText>
      <IconLink hover href="https://github.com/sunteago/portfolio">
        <span>{t(translateKeys.SOURCE_CODE).toLowerCase()}</span>
        <GithubIcon />
      </IconLink>
    </SourceText>
  )
}

const SourceText = styled.div`
  position: fixed;
  bottom: 0;
  left: 1rem;
  user-select: none;
  font-size: calc(0.5rem + 0.7vw);
  display: none;
  :hover {
    a {
      color: var(--accent);
      font-weight: bold;
    }
  }
  > a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: var(--secondary);
    > div {
      margin-left: 0.5rem;
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    display: flex;
    align-items: center;
  }
`
