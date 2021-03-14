import React, { useContext } from "react"
import pageOptionsContext from "../context/pageOptionsContext"
import styled from "@emotion/styled"
import { TriangleIcon } from "./common"
import { breakpoints } from "../utils"
import { Translation } from "react-i18next"
import { translateKeys } from "../constants/translate-keys"
import { locales } from "../constants/locales"

export default function Presentation() {
  const { pageOptions } = useContext(pageOptionsContext)

  const getPresentation = () => (
    <Translation>
      {(t, { i18n }) => (
        <>
          {t(translateKeys.HI_I_AM)}{" "}
          <span className="accent">Santiago Vallejo</span>,{" "}
          {getProfession(i18n.language)}
        </>
      )}
    </Translation>
  )

  return (
    <>
      <Greet color={pageOptions.darkMode ? "accent-light" : "accent"}>
        {getPresentation()}
      </Greet>
      <ShortBio>Specialized in React and React-Native</ShortBio>
    </>
  )
}

const getProfession = language => {
  switch (language) {
    case locales.ES:
      return (
        <>
          desarrollador fronten
          <span className="triangle">
            d<TriangleIcon position="A" />
          </span>
        </>
      )
    case locales.EN:
    default:
      return (
        <>
          frontend develope
          <span className="triangle">
            r<TriangleIcon position="A" />
          </span>
        </>
      )
  }
}

const Greet = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  position: relative;
  .accent {
    color: var(--${prp => prp.color});
  }
  .triangle {
    position: relative;
    svg {
      position: absolute;
      bottom: 0.3rem;
      margin-left: 0.5rem;
      @media (min-width: ${breakpoints.md}) {
        margin-left: 1rem;
        width: calc(1.4rem + 1.6vw);
        height: calc(1.4rem + 1.6vw);
        bottom: 0;
      }
    }
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: calc(2rem + 1vw);
    width: 100%;
  }
  @media (min-width: ${breakpoints.xl}) {
  }
`

const ShortBio = styled.p`
  margin: 0.3rem 0.5rem;
  margin-bottom: 0;
  font-size: 1.25rem;
  @media (min-width: ${breakpoints.lg}) {
    font-size: calc(0.9rem + 0.5vw);
  }
`
