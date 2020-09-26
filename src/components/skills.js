import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Title } from "./common"
import { breakpoints } from "../utils"

export default function Skills() {
  return (
    <>
      <Title
        css={css`
          h2 {
            font-family: var(--font-primary);
          }
        `}
      >
        Skills
      </Title>
      <ListContainer>
        <ul>
          <li>Javascript</li>
          <li>React.js</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>Sass</li>
          <li>GIT</li>
          <li>SSH</li>
          <li>Firebase</li>
          <li>MongoDB</li>
          <li>REST APIs</li>
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
