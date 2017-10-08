import * as React from "react"
import Component from "reactive-magic/component"
import SquareGrid from "./SquareGrid"
import * as world from "../world"

export default class App extends Component<{}> {
	view() {
		const { height, width } = world.windowSize.get()
		return (
			<div style={{ height, width }}>
				<SquareGrid />
			</div>
		)
	}
}
