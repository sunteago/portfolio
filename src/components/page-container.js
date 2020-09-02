import React, { useContext } from "react"
import { GridContext } from "../context/gridContext"
import { breakpoints, grids } from "../utils"
import styled from "@emotion/styled"

const Container = styled.main`
  .tl-edges {
    width: 100% !important;
    overflow: hidden !important;
    overflow-y: hidden !important;
  }
  .tl-wrapper {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-areas: ${props => props.grid.sm};
    min-height: 100vh;
    width: 100%;
    padding: 2rem;
    grid-gap: 5rem 1rem;

    @media (min-width: ${breakpoints.lg}) {
      padding: 1rem;
      height: 100vh;
      grid-gap: 1rem;
      grid-template-rows: 32px 3fr 1fr 3fr 3fr 1fr;
      grid-template-columns: 2fr repeat(11, 1fr);
      grid-template-areas: ${props => props.grid.lg};
    }
    @media (min-width: ${breakpoints.xl}) {
      grid-template-areas: ${props => props.grid.xl};
    }
  }
`

export default function PageContainer({ children }) {
  const { pageGrid } = useContext(GridContext)
  console.log(pageGrid)
  return <Container grid={grids[pageGrid]}>{children}</Container>
}
