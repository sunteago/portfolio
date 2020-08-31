import React from "react"
import styled from "@emotion/styled"
import { Title } from "./common"
import SectionContainer from "./common/SectionContainer"
import { breakpoints } from "../utils"

const ListContainer = styled.div`
  font-size: 1.25rem;
  margin: 0 auto;
  ul {
    column-count: 2;
    column-gap: 4rem;
    padding-left: 3rem;

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

export default function Skills() {
  return (
    <SectionContainer
      gridArea="skls"
      extraStyles={`
      justify-self: center;
      @media(min-width: ${breakpoints.md}) {
        justify-self: start;
      }
    `}
    >
      <Title>Skills</Title>
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
    </SectionContainer>
  )
}
