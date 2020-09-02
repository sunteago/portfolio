import React from "react"
import styled from "@emotion/styled"
import { breakpoints } from "../utils"

const Lang = styled.div`
  display: none;
  position: absolute;
  top: 1rem;
  left: 20%;
  @media (min-width: ${breakpoints.lg}) {
    font-weight: bold;
    font-size: 2rem;
    display: block;
  }
`

export default function TopNav() {
  const [lang, setLang] = React.useState("en")

  return (
    <Lang>
      <ToggleLangBtn
        id="en"
        active={lang === "en" && "true"}
        onClick={() => {
          setLang("en")
        }}
      >
        en
      </ToggleLangBtn>
      <ToggleLangBtn
        id="es"
        active={lang === "es" && "true"}
        onClick={() => {
          setLang("es")
        }}
      >
        es
      </ToggleLangBtn>
    </Lang>
  )
}

const ToggleLangBtn = styled.span`
  color: var(--dark);
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s ease-in;
  ${props =>
    props.active &&
    `background: var(--dark);
       color: var(--light);`}
  &#en {
    clip-path: polygon(0 0, 100% 0, 72% 100%, 0% 100%);
    padding: 0.3rem 1.2rem 0.3rem 0.5rem;
  }
  &#es {
    clip-path: polygon(28% 0, 100% 0, 100% 100%, 0% 100%);
    padding: 0.3rem 0.5rem 0.3rem 1.2rem;
    margin-left: -20px;
  }
`
