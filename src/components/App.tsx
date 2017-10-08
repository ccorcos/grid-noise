import * as React from "react"
import Component from "reactive-magic/component"
import Note from "./Note"

export default class App extends Component<{}> {
	view() {
		return (
			<div>
				<h1>Hello World</h1>
				<Note />
			</div>
		)
	}
}
