import React from "react"
import styled from "@emotion/styled"
import { isMobile } from "react-device-detect"

export default function LanguageSwitch({ language, setLanguage }) {
  return (
    <div>
      <ToggleLanguageButton
        id="en"
        active={language === "en" && "true"}
        mobile={isMobile}
        onClick={() => setLanguage("en")}
      >
        en
      </ToggleLanguageButton>
      <ToggleLanguageButton
        id="es"
        active={language === "es" && "true"}
        mobile={isMobile}
        onClick={() => setLanguage("es")}
      >
        es
      </ToggleLanguageButton>
    </div>
  )
}

const ToggleLanguageButton = styled.span`
  color: ${props => (props.mobile ? "var(--primary)" : "var(--secondary)")};
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s ease-in;
  font-size: ${props => (props.mobile ? "1.5rem" : "calc(0.7rem + 0.7vw)")};

  ${props =>
    props.active &&
    `background: ${props.mobile ? "var(--primary)" : "var(--secondary)"} ;
     color: ${props.mobile ? "var(--secondary)" : "var(--primary)"} ;
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
