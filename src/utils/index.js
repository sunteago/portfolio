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
    case "about":
      return "60px 1fr 80px 2fr 0fr 1fr"
    case "projectPage":
      return "60px 2fr 1fr 3fr 1fr 1fr"
    default:
    case "main":
      return "60px 3fr 1fr 3fr 3fr 1fr"
  }
}

export const emailobj = {
  name: "santi.vallejo",
  domain: "gmail",
  tld: "com",
}

export const generateMailto = e => {
  window.location.href =
    "mailto:" + emailobj.name + "@" + emailobj.domain + "." + emailobj.tld
  e.preventDefault()
}
