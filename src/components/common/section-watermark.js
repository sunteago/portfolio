import React from "react"
import styled from "@emotion/styled"
import { breakpoints } from "../../utils"
import { useTranslation } from "react-i18next"

export default function SectionWatermark({ titleKey }) {
  const { t } = useTranslation()

  return <Watermark>{t(titleKey)}</Watermark>
}

const Watermark = styled.h3`
  text-transform: uppercase;
  font-size: 3vw;
  display: none;
  color: var(--secondary);
  opacity: 0.15;
  font-family: var(--font-primary);
  font-weight: 900;
  user-select: none;

  @media (min-width: ${breakpoints.lg}) {
    position: absolute;
    display: block;
    bottom: 1rem;
    right: calc(10vw + 50px);
  }
`
