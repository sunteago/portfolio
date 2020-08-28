import React from "react"
import styled from "@emotion/styled"
import { Title } from "./common"
import SectionContainer from "./common/SectionContainer"
import { GithubIcon, LinkedinIcon } from "./common"

const ContactContainer = styled.div`
  font-size: 1.5rem;
  margin: 0 auto;
  ul {
    padding-left: 3rem;
    list-style: none;
  }
`

const ContactItem = styled.li`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  div {
    margin-right: 1rem;
  }
`

export default function Skills() {
  return (
    <SectionContainer gridArea="cntc">
      <Title>Contact</Title>
      <ContactContainer>
        <ul>
          <ContactItem>
            <GithubIcon />
            santi.vallejo@gmail.com
          </ContactItem>
          <ContactItem>
            <GithubIcon /> GitHub
          </ContactItem>
          <ContactItem>
            <LinkedinIcon />
            LinkedIn
          </ContactItem>
        </ul>
      </ContactContainer>
    </SectionContainer>
  )
}
