import React from "react"

export default function Triangle({
  width = 40,
  height = width - 10,
  position = "A",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 45 45"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d={
          position === "A"
            ? "M6 1h34.54L6 34.63V1z"
            : "M43.758 36.8H3.646L43.758 2.185V36.8z"
        }
      ></path>
      <path
        fill="currentColor"
        d={
          position === "A"
            ? "M38 0L0 37V0h38z"
            : "M10.557 42l34.2-40.201V42h-34.2z"
        }
      ></path>
    </svg>
  )
}
