import * as React from "react"
import {
  FaGithubSquare as Github,
  FaTwitterSquare as Twitter,
} from "react-icons/fa"

export const menuItems = [
  {
    path: "/",
    text: "home",
  },
  {
    path: "/blog",
    text: "blog",
  },
  {
    path: "/contact",
    text: "contact",
  },
]

export const socialItems = [
  {
    path: "https://www.github.com/liray-unendlich",
    icon: <Github />,
  },
  {
    path: "https://www.twitter.com/liray_indexer",
    icon: <Twitter />,
  },
]
