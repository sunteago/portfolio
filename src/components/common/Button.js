import React from "react"
import styled from "@emotion/styled"
import { breakpoints } from "../../utils"
export default function Button(props) {
  return <Btn {...props}>{props.children}</Btn>
}

const Btn = styled.button`
  display: block;
  position: relative;
  background: var(--dark);
  color: var(--light);
  border: none;
  font-size: 1.25rem;
  padding: 0.7rem;
  margin: 3rem 0 2rem auto;
  z-index: 1;
  transition: background 0.15s ease-in;
  cursor: pointer;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: -4px;
    left: 3px;
    border: 2px solid var(--dark);
    transition: all 0.15s ease-in;
  }
  :hover,
  :focus {
    background: var(--accent);
    &::after {
      top: -5px;
      left: 5px;
      border: 2px solid var(--accent);
    }
  }
  @media (min-width: ${breakpoints.md}) {
    margin-top: calc(1.3vw + 1rem);
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: calc(0.2vw + 0.8rem);
  }
`
