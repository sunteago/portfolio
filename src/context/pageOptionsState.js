import React from "react"
import PageOptionsContext from "./pageOptionsContext"

export default function PageOptionsState({
  children,
  pageOptions,
  setPageOptions,
}) {
  return (
    <PageOptionsContext.Provider value={{ pageOptions, setPageOptions }}>
      {children}
    </PageOptionsContext.Provider>
  )
}
