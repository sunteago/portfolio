import React from "react"
import styled from "@emotion/styled"
import { Title } from "./common"
import SectionContainer from "./common/SectionContainer"
import { GithubIcon, LinkedinIcon } from "./common"

const ContactContainer = styled.div`
  font-size: 1.25rem;
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
      margin-bottom: 1rem;
      div {
        margin-right: 0.5rem;
      }
    }
  }
`
export default function Skills() {
  return (
    <SectionContainer gridArea="cntc">
      <Title>Contact</Title>
      <ContactContainer>
        <ul>
          <li>
            <GithubIcon />
            santi.vallejo@gmail.com
          </li>
          <li>
            <GithubIcon /> GitHub
          </li>
          <li>
            <LinkedinIcon />
            LinkedIn
          </li>
        </ul>
      </ContactContainer>
    </SectionContainer>
  )
}
