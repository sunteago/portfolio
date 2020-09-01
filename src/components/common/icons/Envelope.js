import React from "react"
import IconLink from "../IconLink"

export default function DemoIcon({ link, width = 38, height = width, hover }) {
  return (
    <div>
      <IconLink href={link} hover={hover}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          fill="none"
          viewBox="0 0 35 36"
        >
          <path
            fill="currentColor"
            d="M35.318 13.416a.423.423 0 01.682.33v14.379a3.376 3.376 0 01-3.375 3.375H3.375A3.376 3.376 0 010 28.125V13.753c0-.351.4-.548.682-.33 1.575 1.223 3.663 2.777 10.835 7.987 1.484 1.083 3.987 3.361 6.483 3.347 2.51.021 5.063-2.306 6.49-3.347 7.172-5.21 9.253-6.77 10.828-7.994zM18 22.5c1.631.028 3.98-2.053 5.16-2.91 9.331-6.772 10.042-7.363 12.193-9.05.408-.317.647-.809.647-1.33V7.876A3.376 3.376 0 0032.625 4.5H3.375A3.376 3.376 0 000 7.875v1.336c0 .52.24 1.005.647 1.329 2.151 1.68 2.862 2.278 12.192 9.05 1.181.857 3.53 2.938 5.161 2.91z"
          ></path>
        </svg>
      </IconLink>
    </div>
  )
}
