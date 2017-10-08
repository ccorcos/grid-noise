import * as React from "react"
import Component from "reactive-magic/component"
import SquareGrid from "./SquareGrid"

export default class App extends Component<{}> {
	view() {
		return (
			<div>
				<SquareGrid />
			</div>
		)
	}
}
