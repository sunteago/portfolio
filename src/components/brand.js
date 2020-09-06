import React from "react"
import styled from "@emotion/styled"
import { breakpoints } from "../utils"
import { Link } from "gatsby"

export default function Brand() {
  return (
    <BrandContainer to="/">
      <span>S</span>antiago Vallejo
    </BrandContainer>
  )
}

const BrandContainer = styled(Link)`
  position: absolute;
  top: 2rem;
  letter-spacing: 3px;
  left: 0rem;
  font-size: 1.5rem;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  color: var(--dark);
  span {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 63%);
    background: var(--dark);
    padding: 0.2rem 0 0.4rem 2rem;
    color: var(--light);
    display: inline-block;
    margin-right: 0.2rem;
  }
  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`
