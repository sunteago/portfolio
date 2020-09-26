import React from "react"

export default function DarkMode({ width = 38, height = width }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 36 36"
    >
      <path
        fill="currentColor"
        d="M.563 18C.563 27.63 8.37 35.438 18 35.438S35.438 27.63 35.438 18C35.438 8.37 27.63.562 18 .562 8.37.563.562 8.37.562 18zM18 30.938V5.063c7.151 0 12.938 5.787 12.938 12.937 0 7.151-5.788 12.938-12.938 12.938z"
      ></path>
    </svg>
  )
}
