import React from "react"
import { css } from "@emotion/core"
import TriangleIcon from "./icons/Triangle"
import { breakpoints } from "../../utils"

const HeadingComponent = heading => props => {
  const element = {
    h1: <h1 {...props}>{props.children}</h1>,
    h2: <h2 {...props}>{props.children}</h2>,
  }
  return element[heading]
}

export default function Title({
  heading = "h2",
  position = "B",
  location = "A",
  children,
  fontFamily = "Raleway",
  fontWeight = 600,
}) {
  let HeadingCmp = HeadingComponent(heading)

  return (
    <HeadingCmp
      css={css`
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        font-weight: ${fontWeight};
        font-family: ${fontFamily}, "Franklin Gothic Medium", "Arial Narrow",
          Arial, sans-serif;
        svg {
          vertical-align: middle;
        }

        @media (min-width: ${breakpoints.lg}) {
          text-align: left;
          margin-bottom: calc(1vh);
          font-size: calc(1rem + 1vw);
        }
      `}
    >
      {location === "A" ? (
        <>
          <TriangleIcon position={position} width={35} />
          {children}
        </>
      ) : (
        <>
          {children} <TriangleIcon position={position} width={35} />
        </>
      )}
    </HeadingCmp>
  )
}
