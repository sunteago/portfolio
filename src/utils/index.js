/* eslint-disable */
import pageLayouts from "../constants/layouts"

export const breakpoints = {
  xs: "387px",
  sm: "577px",
  md: "769px",
  lg: "993px",
  xl: "1369px",
}

export const defaultGithubLink = "https://github.com/sunteago/"
export const linkedinLink = "https://www.linkedin.com/in/santiago-vallejo-dev/"

export const getGridLayout = layout => {
  switch (layout) {
    case pageLayouts.ABOUT:
      return "60px 1fr 80px 2fr 0fr 1fr"
    case pageLayouts.PROJECT_PAGE:
      return "60px 2fr 1fr 3fr 1fr 1fr"
    case pageLayouts.PROJECTS:
      return "60px 1fr 1fr 3fr 3fr 1fr"
    default:
    case pageLayouts.MAIN:
      return "60px 3fr 1fr 3fr 3fr 1fr"
  }
}

export const emailobj = {
  name: "santi.vallejo",
  domain: "gmail",
  tld: "com",
}

export const generateMailTo = e => {
  window.location.href =
    "mailto:" + emailobj.name + "@" + emailobj.domain + "." + emailobj.tld
  e.preventDefault()
}

export const clipAtChar = (str = "", char) => {
  return str.substr(0, char) + "..."
}

export const isNotInMainPage = layout => {
  return layout !== pageLayouts.MAIN
}
