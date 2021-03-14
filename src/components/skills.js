import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Title } from "./common"
import { breakpoints } from "../utils"
import { skills } from "../constants/skills"
import { useTranslation } from "react-i18next"
import translateKeys from "../constants/translate-keys"

export default function Skills() {
  const { t } = useTranslation()

  return (
    <>
      <Title
        css={css`
          h2 {
            font-family: var(--font-primary);
          }
        `}
      >
        {t(translateKeys.SKILLS)}
      </Title>
      <ListContainer>
        <ul>
          {skills.map((skill, index) => (
            <li key={skill + index}>{skill}</li>
          ))}
        </ul>
      </ListContainer>
    </>
  )
}

const ListContainer = styled.div`
  font-size: 1.25rem;
  margin: 0 auto;

  ul {
    column-count: 2;
    column-gap: 4rem;
    padding-left: 1rem;
    list-style: none;

    li {
      margin-bottom: 1rem;
    }
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: calc(0.7rem + 0.5vw);
  }

  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    ul {
      li {
        margin-bottom: 0.3rem;
      }
    }
  }
`
