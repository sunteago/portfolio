import React from "react"

export default function DemoIcon({ width = 38, height = width }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 35 27"
      >
        <path
          fill="currentColor"
          d="M34.125 21.938h-13.26c-.04 1.044-.804 1.687-1.79 1.687H15.75c-1.022 0-1.806-.921-1.792-1.688H.875c-.481 0-.875.38-.875.844v.844C0 25.481 1.575 27 3.5 27h28c1.925 0 3.5-1.519 3.5-3.375v-.844c0-.464-.394-.843-.875-.843zM31.5 2.53C31.5 1.14 30.319 0 28.875 0H6.125C4.681 0 3.5 1.14 3.5 2.531V20.25h28V2.531zM28 16.875H7v-13.5h21v13.5z"
        ></path>
      </svg>
    </div>
  )
}
