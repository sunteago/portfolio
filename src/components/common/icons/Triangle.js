import React from "react"

export default function Triangle({
  width = 40,
  height = width - 10,
  position = "A",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      fill="none"
      viewBox="0 0 45 45"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d={
          position === "A" ? "M6 1h34.54L6 34.63V1z" : "M37 31H2.74L37 2.15V31z"
        }
      ></path>
      <path
        fill="currentColor"
        d={position === "A" ? "M38 0L0 37V0h38z" : "M0 38L38 6v32H0z"}
      ></path>
    </svg>
  )
}
