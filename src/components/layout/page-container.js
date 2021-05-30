import styled from "@emotion/styled"
import React from "react"
import { breakpoints, getGridLayout, isNotInMainPage } from "../../utils"
import pageLayouts from "../../constants/layouts"
import SocialNetworks from "./social-networks"
import PageOptions from "./page-options"
import SectionWatermark from "../common/section-watermark"
import Brand from "./brand"
import SourceCode from "./source-code"

export default function PageContainer({ children, pageContext }) {
  let { layout, sectionTitle } = pageContext

  if (!layout) {
    layout = pageLayouts.MAIN
  }

  return (
    <PageBoxContainer layout={layout}>
      {isNotInMainPage(layout) && (
        <>
          <Brand />
          <SectionWatermark titleKey={sectionTitle} />
        </>
      )}

      <SocialNetworks />
      <PageOptions />
      <SourceCode />
      {children}
    </PageBoxContainer>
  )
}

const PageBoxContainer = styled.main`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas:
    "pres netwrk"
    "wrk wrk"
    "skls skls"
    "cntc cntc"
    "fotr fotr";
  width: 100%;
  padding: 2rem;
  grid-gap: ${({ layout }) => (layout === "about" ? "1rem" : "2rem 1rem")};

  @media (min-width: ${breakpoints.lg}) {
    padding: 1rem;
    height: 100vh;
    grid-gap: 1rem;
    grid-template-columns: 2fr repeat(11, 1fr);
    grid-template-rows: ${props => getGridLayout(props.layout)};
    grid-template-areas:
      ". lang lang . . . . . . . netwrk netwrk"
      ". . pres pres pres pres pres pres . . . rnav"
      ". . . . . . . . . . . rnav"
      ". . wrk wrk wrk wrk wrk skls skls skls skls rnav "
      ". . wrk wrk wrk wrk wrk cntc cntc cntc . rnav "
      ". . . . . . . . . . . rnav";
  }
  @media (min-width: ${breakpoints.xl}) {
    grid-template-areas:
      ". lang lang . . . . . . . netwrk netwrk"
      ". . pres pres pres pres pres . . . . rnav"
      ". . . . . . . . . . . rnav"
      ". . wrk wrk wrk wrk wrk skls skls skls skls rnav "
      ". . wrk wrk wrk wrk wrk cntc cntc cntc . rnav "
      ". . . . . . . . . . . rnav";
  }

  @media (min-height: 768px) {
    padding-top: 1rem;
  }

  #page-options {
    display: none;
    @media (min-width: ${breakpoints.lg}) {
      font-size: 1.25rem;
      display: flex;
    }
  }
`
