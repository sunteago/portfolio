import React from "react"
import { css } from "@emotion/core"
import { Title, Button } from "../common"
import { breakpoints } from "../../utils"
import useProjects from "../../hooks/use-projects"
import ProjectCard from "./project-card"
import { useTranslation } from "react-i18next"
import translateKeys from "../../constants/translate-keys"

export default function Projects() {
  const { t, i18n } = useTranslation()
  const projects = useProjects(i18n.language)

  return (
    <>
      <Title
        css={css`
          h2 {
            font-family: var(--font-primary);
          }
        `}
      >
        {t(translateKeys.PROJECTS)}
      </Title>
      <ProjectCard projects={projects} />
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
        `}
      >
        <Button
          css={css`
            margin: 3rem 0 2rem auto;
            width: auto;

            @media (min-width: ${breakpoints.md}) {
              margin-top: calc(1.3vw + 1rem);
            }
            @media (min-width: ${breakpoints.lg}) {
              font-size: calc(0.4vw + 0.5rem);
            }
          `}
          component="Link"
          to="/projects"
        >
          {t(translateKeys.SEE_ALL)}
        </Button>
      </div>
    </>
  )
}
