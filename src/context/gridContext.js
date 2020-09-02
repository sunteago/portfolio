import React, { useState } from "react"

const initialState = "main"
const GridContext = React.createContext(initialState)

const { Consumer: GridConsumer } = GridContext

const GridState = ({ children }) => {
  const [pageGrid, setPageGrid] = useState(initialState)

  return (
    <GridContext.Provider value={{ pageGrid, setPageGrid }}>
      {children}
    </GridContext.Provider>
  )
}

export { GridState, GridContext, GridConsumer }
