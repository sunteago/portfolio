import React from "react"
import styled from "@emotion/styled"
import { Title } from "./common"
import SectionContainer from "./common/SectionContainer"

const ListContainer = styled.div`
  font-size: 1.25rem;
  margin: 0 auto;
  ul {
    padding-left: 3rem;
    column-count: 2;
    li {
      margin-bottom: 1rem;
    }
  }
`

export default function Skills() {
  return (
    <SectionContainer gridArea="skls">
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
