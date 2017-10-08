import { Value } from "reactive-magic"
import createHistory from "history/createBrowserHistory"

export const history = createHistory()

export const mouse = new Value({ x: 0, y: 0 })

window.addEventListener("mousemove", event => {
	mouse.set({
		x: event.clientX,
		y: event.clientY,
	})
})

export const mousedown = new Value(false)

window.addEventListener("mousedown", event => {
	mousedown.set(true)
})
window.addEventListener("mouseup", event => {
	mousedown.set(false)
})
window.addEventListener("mouseleave", event => {
	mousedown.set(false)
})

export const notes = new Value(new Set<number>())
