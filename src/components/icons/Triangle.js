import React from "react"

export default function Triangle({
  width = 40,
  height = width,
  position = "A",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 38 37"
    >
      <path
        fill="currentColor"
        d={position === "A" ? "M0 0h38L0 37V0z" : "M30 30H0L30 0v30z"}
      ></path>
    </svg>
  )
}
