import React from "react"
import IconLink from "../IconLink"

export default function LinkedinIcon({
  link,
  width = 38,
  height = width,
  hover,
}) {
  return (
    <div>
      <IconLink href={link} hover={hover}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          fill="none"
          viewBox={`0 0 37 38`}
        >
          <path
            fill="currentColor"
            d="M32.5 2.5H2.492C1.117 2.5 0 3.633 0 5.023v29.954c0 1.39 1.117 2.523 2.492 2.523H32.5c1.375 0 2.5-1.133 2.5-2.523V5.023c0-1.39-1.125-2.523-2.5-2.523zm-21.922 30H5.391V15.797h5.195V32.5h-.008zM7.984 13.516a3.01 3.01 0 01-3.007-3.008A3.01 3.01 0 017.984 7.5a3.014 3.014 0 013.008 3.008 3.004 3.004 0 01-3.008 3.008zM30.024 32.5h-5.188v-8.125c0-1.938-.04-4.43-2.695-4.43-2.703 0-3.118 2.11-3.118 4.29V32.5h-5.187V15.797h4.976v2.281h.07c.696-1.312 2.391-2.695 4.915-2.695 5.25 0 6.226 3.46 6.226 7.96V32.5z"
          ></path>
        </svg>
      </IconLink>
    </div>
  )
}
