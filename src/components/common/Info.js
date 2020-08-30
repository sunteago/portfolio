import React from "react"
import IconLink from "./IconLink"

export default function DemoIcon({ link, width = 38, height = width }) {
  return (
    <div>
      <IconLink internal href={link}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          fill="none"
          viewBox="0 0 35 27"
        >
          <path
            fill="currentColor"
            d="M16 .484C7.44.484.5 7.21.5 15.5c0 8.295 6.94 15.016 15.5 15.016 8.56 0 15.5-6.721 15.5-15.016C31.5 7.21 24.56.484 16 .484zm0 6.66c1.45 0 2.625 1.139 2.625 2.543 0 1.405-1.175 2.543-2.625 2.543s-2.625-1.138-2.625-2.543c0-1.404 1.175-2.542 2.625-2.542zm3.5 15.38a.739.739 0 01-.75.726h-5.5a.739.739 0 01-.75-.727V21.07c0-.4.336-.726.75-.726H14v-3.875h-.75a.739.739 0 01-.75-.727V14.29c0-.401.336-.726.75-.726h4c.414 0 .75.325.75.726v6.055h.75c.414 0 .75.325.75.726v1.453z"
          ></path>
        </svg>
      </IconLink>
    </div>
  )
}
