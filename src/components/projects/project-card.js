import React from "react"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {
  Pagination,
  EffectFade,
  Mousewheel,
  Autoplay,
} from "swiper"
import "swiper/swiper-bundle.min.css"
import { breakpoints } from "../../utils"
import { GithubIcon, InfoIcon, DemoIcon } from "../common"
import { Link } from "gatsby"

SwiperCore.use([Pagination, EffectFade, Mousewheel, Autoplay])

export default function ProjectCard({ projects }) {
  return (
    <CardContainer>
      <Swiper
        effect="fade"
        //autoplay
        spaceBetween={30}
        loop={true}
        mousewheel={{
          invert: false,
        }}
        pagination={{ clickable: true }}
      >
        {projects.map(project => (
          <SwiperSlide key={project.slug}>
            <ProjectImage
              fluid={project.image.sharp.fluid}
              alt={project.title}
            />
            <CardContent className="project-card-content">
              <h2>{project.title}</h2>
              <Divider />
              <h3>{project.subtitle}</h3>
              <p>{project.description}</p>
              <Bar>
                <BarLink to={project.slug}>
                  <InfoIcon width={28} />
                  <span>Details</span>
                </BarLink>
                <BarLink to={project.github}>
                  <GithubIcon width={24} />
                  <span>Github</span>
                </BarLink>
                <BarLink to={project.demo}>
                  <DemoIcon width={24} />
                  <span>Demo</span>
                </BarLink>
              </Bar>
            </CardContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </CardContainer>
  )
}

const generateFade = n => {
  let fadeStyles = ""
  for (let i = 1; i <= n; i++) {
    fadeStyles += `.swiper-slide-active .project-card-content > *:nth-of-type(${i}) {
      transition-delay: ${0.3 + i / 10}s;
    }`
  }
  return fadeStyles
}

const ProjectImage = styled(Image)`
  width: 95%;
  transform: translateY(-20%);
  flex-shrink: 0;
  height: 200px;
  border-radius: var(--radius);
  overflow: hidden;

  @media screen and (min-width: ${breakpoints.sm}) {
    width: 90%;
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    transform: translate(-70px, 20px);
    width: 200px;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    width: 250px;
    height: 250px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
    opacity: 0.8;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: 0;
    border-radius: var(--radius);
    transition: all 0.3s;
  }
`

const CardContent = styled.div`
  margin-top: -1rem;
  margin-left: 0;
  text-align: center;
  flex: 0 1 100%;
  height: 100%;
  padding: 0;
  @media (min-width: ${breakpoints.lg}) {
    align-self: start;
    margin-top: 1rem;
    margin-left: -50px;
    text-align: left;
    padding-right: 20px;
  }
  & > * {
    opacity: 0;
    transform: translateY(25px);
    transition: all 0.4s;
  }
  h2 {
    font-size: 1.4rem;
    font-family: Oswald, sans-serif;
    color: var(--light);
    margin-bottom: 0.3rem;
    margin-top: 1rem;
  }
  h3 {
    font-family: Oswald, sans-serif;
    color: var(--light);
    margin-bottom: 20px;
    font-weight: 300;
  }
  p {
    color: var(--light);
    margin-bottom: 30px;
    line-height: 1.5em;
  }
`

const Bar = styled.div`
  position: absolute;
  bottom: -20px;
  transform: translate(-50%, 0) !important;
  background: var(--accent);
  padding: 0.2rem 0.4rem;
  border-radius: var(--radius);
  color: var(--light);
  text-decoration: none;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  display: inline-flex;

  @media (min-width: ${breakpoints.lg}) {
    left: auto;
    top: auto;
    right: 5px;
    transform: none !important;
  }
  & > a {
    margin: 0 0.4rem;
    flex: 0 1 20%;
    align-items: center;
    display: flex;
    color: var(--light);
    text-decoration: none;
    & > span {
      display: none;
      margin-left: 0.3rem;
      @media (min-width: ${breakpoints.xl}) {
        display: inline;
        font-family: Oswald, sans-serif;
      }
    }
  }
`

const BarLink = styled(Link)`
  transition: color 0.2s ease-in;
  :hover {
    color: #fff;
  }
`

const CardContainer = styled.div`
  position: relative;
  margin: auto;
  margin-top: 100px;
  background: var(--dark);
  padding: 0 15px;
  border-radius: var(--radius);
  transition: all 0.3s;
  &::after {
    content: "";
    position: absolute;
    top: -5px;
    left: 6px;
    width: 100%;
    height: 100%;
    background: var(--light);
    border: 3px solid var(--dark);
    z-index: -1;
  }
  > div {
    overflow: visible;
  }

  @media (min-width: ${breakpoints.lg}) {
    margin-top: 24px;
  }

  .swiper-slide {
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (min-width: ${breakpoints.lg}) {
      flex-direction: row;
    }
    &-active {
      img {
        opacity: 1;
        transition-delay: 0.3s;
      }
      .project-card-content > * {
        opacity: 1;
        transform: none;
      }
    }
  }

  ${() => generateFade(8)}

  .swiper-container-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 10px;
    left: 0;
    width: 100%;
  }
  .swiper-pagination {
    position: absolute;
    transform: translateX(-50%);
    z-index: 21;
    left: 50% !important;
    top: 175px;
    width: 100% !important;
    display: inline-flex;
    justify-content: center;
    @media screen and (min-width: ${breakpoints.lg}) {
      display: block;
      transform: translateY(-50%);
      right: 0;
      width: 11px !important;
      left: auto !important;
      top: 50%;
      bottom: auto !important;
    }
    &-bullet {
      margin: 0 5px;
      width: 11px;
      height: 11px;
      display: block;
      background: var(--light);
      transition: all 0.3s;
      border-radius: 0;
      opacity: 0.7;
      &-active {
        background: var(--accent);
        height: 11px;
        width: 30px;
        @media screen and (min-width: ${breakpoints.lg}) {
          width: 11px;
          height: 30px;
        }
      }
      @media screen and (min-width: ${breakpoints.lg}) {
        margin: 8px 0 !important;
      }
    }
  }
`

const Divider = styled.div`
  @media (min-width: ${breakpoints.lg}) {
    background: var(--light);
    height: 1px;
  }
`
