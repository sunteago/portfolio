import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import TriangleIcon from "./icons/Triangle"
import { breakpoints } from "../../utils"

const createHeading = heading => props => {
  return React.createElement(heading, props, props.children)
}

export default function Title(props) {
  const {
    heading = "h2",
    position = "B",
    location = "A",
    triangle = true,
    children,
  } = props

  const HeadingComponent = createHeading(heading)

  return (
    <TitleContainer {...props}>
      <TitleComponent>
        {triangle && location === "A" && (
          <TriangleIcon position={position} width={40} />
        )}
        <HeadingComponent css={headingStyle}>{children}</HeadingComponent>
      </TitleComponent>
    </TitleContainer>
  )
}

const TitleComponent = styled.div`
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
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: ${breakpoints.lg}) {
    justify-content: flex-start;
  }
`

const headingStyle = css`
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
`
