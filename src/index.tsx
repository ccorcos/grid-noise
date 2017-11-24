import * as React from "react"
import * as ReactDOM from "react-dom"
import { css } from "glamor"
import App from "./components/App"

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

document.body.addEventListener("touchmove", event => {
	event.preventDefault()
})

const root = document.createElement("div")
document.body.appendChild(root)

ReactDOM.render(<App />, root)
