import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const createLinkCmp = linkCmp => props => {
  const element = {
    Link: <Link {...props}>{props.children}</Link>,
    a: <a {...props}>{props.children}</a>,
    button: <button {...props}>{props.children}</button>,
  }

  return element[linkCmp]
}

export default function Button(props) {
  const LinkComponent = createLinkCmp(props.component || "Link")

  return (
    <LinkComponent
      {...props}
      css={css`
        display: flex;
        text-decoration: none;
        position: relative;
        background: var(--secondary);
        color: var(--primary);
        border: none;
        font-size: 1.25rem;
        padding: 0.7rem;
        font-family: var(--font-primary);
        align-items: center;

        z-index: 1;
        transition: background 0.15s ease-in;
        cursor: pointer;
        &::after {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: -1;
          top: -4px;
          left: 3px;
          border: 2px solid var(--secondary);
          transition: all 0.15s ease-in;
        }
        :hover,
        :focus {
          background: var(--accent);
          &::after {
            top: -5px;
            left: 5px;
            border: 2px solid var(--accent);
          }
        }
      `}
    >
      {props.children}
    </LinkComponent>
  )
}
