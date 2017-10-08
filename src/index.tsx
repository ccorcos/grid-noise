import * as React from "react"
import * as ReactDOM from "react-dom"
import { css } from "glamor"
import Router from "./components/Router"

css.global("html, body", {
	userSelect: "none",
	WebkitTapHighlightColor: "transparent",
	overflow: "hidden",
	padding: 0,
	margin: 0,
})

css.global("a", {
	color: "inherit",
	textDecoration: "none",
})

const root = document.createElement("div")
document.body.appendChild(root)

ReactDOM.render(<Router />, root)
