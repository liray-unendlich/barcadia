import * as React from "react"
import {
  FaGithubSquare as Github,
  FaTwitterSquare as Twitter,
} from "react-icons/fa"

export const menuItems = [
  {
    path: "/ja",
    text: "ホーム",
  },
  {
    path: "/ja/blogs",
    text: "ブログ",
  },
  {
    path: "/ja/contact",
    text: "問い合わせ",
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
