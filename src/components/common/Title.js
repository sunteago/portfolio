import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import TriangleIcon from "./icons/Triangle"
import { breakpoints } from "../../utils"

const createHeading = heading => props => {
  const element = {
    h1: <h1 {...props}>{props.children}</h1>,
    h2: <h2 {...props}>{props.children}</h2>,
  }
  return element[heading]
}

export default function Title(props) {
  const {
    heading = "h2",
    position = "B",
    location = "A",
    triangle = true,
    children,
  } = props

  const HeadingCmp = createHeading(heading)

  return (
    <TitleContainer>
      {triangle && location === "A" ? (
        <TriangleIcon position={position} width={40} />
      ) : null}
      <HeadingCmp
        css={css`
          text-align: center;
          font-size: 2.5rem;
          font-weight: 600;
          font-family: var(--font-secondary);
          margin-left: 0.125rem;
          svg {
            vertical-align: middle;
          }

          @media (min-width: ${breakpoints.lg}) {
            text-align: left;
            font-size: calc(1rem + 1vw);
          }
        `}
        {...props}
      >
        {children}
      </HeadingCmp>
    </TitleContainer>
  )
}

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  position: relative;
  svg {
    transform: translate(-90%);
    position: absolute;
    left: -2px;
    width: 40px;
  }
  @media (min-width: ${breakpoints.lg}) {
    margin-bottom: 1vh;
  }
`
