import React from "react"
import { Link } from "gatsby"
import { breakpoints } from "../../utils"
import styled from "@emotion/styled"
import pageOptionsContext from "../../context/pageOptionsContext"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import translateKeys from "../../constants/translate-keys"

export default function RightNav() {
  const { pageOptions } = useContext(pageOptionsContext)
  const { t } = useTranslation()

  return (
    <>
      <NavBarContainer>
        <NavBar>
          <NavLink fade activeClassName="active" to="/">
            {t(translateKeys.HOME)}
          </NavLink>
          <NavLink fade activeClassName="active" to="/projects">
            {t(translateKeys.PROJECTS)}
          </NavLink>
          <NavLink fade activeClassName="active" to="/about">
            {t(translateKeys.ABOUT)}
          </NavLink>
          <ResumeLink
            target="_blank"
            rel="noopener noreferrer"
            href="./resume-santiago-vallejo.pdf"
          >
            {t(translateKeys.RESUME)}
          </ResumeLink>
        </NavBar>
        <FooterBox darkMode={pageOptions.darkMode}>
          <div>
            <p>{t(translateKeys.DESIGNED_BY)}</p>
            <p>Santiago Vallejo</p>
          </div>
        </FooterBox>
      </NavBarContainer>
    </>
  )
}

const NavBarContainer = styled.div`
  display: none;

  @media (min-width: ${breakpoints.lg}) {
    display: block;
    position: fixed;
    top: -10vh;
    right: 0;
    width: calc(5vh + 80px);
    background: var(--secondary);
    transform-origin: 50% 50%;
    height: 120vh;
    transform: rotate(7deg);
    transition: width 0.15s ease-out;
    z-index: 30;

    ::after {
      content: "";
      z-index: 2;
      position: absolute;
      top: 0;
      right: 0;
      height: 120vh;
      width: 500px;
      transform: translate(99%);
      background: var(--secondary);
    }

    :hover {
      width: calc(5vh + 100px);
      p {
        left: 80%;
      }
    }
  }
`

const NavBar = styled.nav`
  transform: rotate(-90deg) translate(-50%, 0);
  transform-origin: left top;
  position: absolute;
  left: -1.3rem;
  top: 50%;
  display: flex;
`

const MenuLink = `
  color: var(--primary);
  font-size: calc(4vh + 0.5rem);
  margin: 1.5rem 1vw;
  font-weight: 300;
  display: block;
  text-align: center;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;

  &.active,
  &:hover {
    font-weight: 500;
  }

  ::before {
    display: block;
    font-weight: 500;
    white-space: nowrap;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
  `

const NavLink = styled(Link)`
  ${MenuLink}
`

const ResumeLink = styled.a`
  ${MenuLink}
`

const FooterBox = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 8.5vh;
  right: 0;
  color: var(--primary);
  height: 200px;
  width: 100%;
  transform: translate(0%, 100%) rotate(-30deg);
  background: ${props => (props.darkMode ? "var(--primary)" : "var(--accent)")};
  z-index: 20;
  transform-origin: left top;

  ::after {
    content: "";
    right: 0;
    top: 0;
    background: ${props =>
      props.darkMode ? "var(--primary)" : "var(--accent)"};
    height: 100%;
    width: 300px;
    position: absolute;
    transform: translate(99%, 0%);
    z-index: -100;
  }

  p {
    position: absolute;
    transform: translate(-50%, 0);
    font-size: calc(0.5vw + 0.5rem);
    white-space: pre;
    left: 87%;
    transition: left 0.15s ease-out;
    user-select: none;
  }

  p:nth-of-type(1) {
    top: calc(-0.5vw + -0.85rem);
    color: var(--primary);
  }

  p:nth-of-type(2) {
    top: 0;
    color: ${props => (props.darkMode ? "var(--secondary)" : "var(--primary)")};
  }
`
