import React from "react"
import styled from "@emotion/styled"

export default function SeeMore() {
  return <SeeMoreBtn>See more</SeeMoreBtn>
}

const SeeMoreBtn = styled.button`
  position: relative;
  background: var(--dark);
  display: block;
  border: none;
  color: var(--light);
  font-size: 1.25rem;
  padding: 0.7rem;
  margin: 4rem 0 2rem auto;
  z-index: 1;
  transition: background 0.1s ease-in;
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
    transition: all 0.1s ease-in;
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
`
