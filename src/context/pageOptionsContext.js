import React from "react"

const pageOptionsContext = React.createContext({
  pageOptions: {
    lang: "en",
    darkMode: false,
  },
  setPageOptions: () => {},
})

export default pageOptionsContext
