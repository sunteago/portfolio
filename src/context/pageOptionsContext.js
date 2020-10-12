import React from "react"

export default React.createContext({
  pageOptions: {
    lang: "en",
    darkMode: false,
  },
  setPageOptions: () => {},
})
