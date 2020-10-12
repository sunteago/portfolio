import React from "react"
import DesktopNav from "./desktop-nav"
import MobileNav from "./mobile-nav"

export default function RightNav({ darkMode }) {
  return (
    <>
      <DesktopNav darkMode={darkMode} />
      <MobileNav darkMode={darkMode} />
    </>
  )
}
