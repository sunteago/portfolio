import React from "react"
import styled from "@emotion/styled"
import { breakpoints } from "../utils"

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

const Lang = styled.div`
  display: none;
  position: absolute;
  top: 1rem;
  left: 20%;
  @media (min-width: ${breakpoints.lg}) {
    font-size: 1.25rem;
    display: block;
  }
`

const ToggleLangBtn = styled.span`
  color: var(--dark);
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s ease-in;
  ${props =>
    props.active &&
    `background: var(--dark);
     color: var(--light);
     font-weight: bold;
       `}
  &#en {
    clip-path: polygon(0 0, 100% 0, 72% 100%, 0% 100%);
    padding: 0.3rem 1.2rem 0.3rem 0.5rem;
  }
  &#es {
    clip-path: polygon(28% 0, 100% 0, 100% 100%, 0% 100%);
    padding: 0.3rem 0.5rem 0.3rem 1.2rem;
    margin-left: -14px;
  }
`
