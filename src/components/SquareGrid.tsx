import * as React from "react"
import Component from "reactive-magic/component"
import Note from "./Note"

export default class SquareGrid extends Component<{}> {
	view() {
		const height = 10
		const width = 10
		return (
			<div style={{}}>
				{Array(height)
					.fill(undefined)
					.map((_, h) => {
						return (
							<div key={h} style={{}}>
								{Array(width)
									.fill(undefined)
									.map((_, w) => {
										return (
											<Note
												key={w}
												style={{
													height: 100,
													width: 100,
													margin: 5,
													backgroundColor: "blue",
													outline: "none",
													border: "none",
													borderRadius: 3,
												}}
												midi={w + h * 10}
											/>
										)
									})}
							</div>
						)
					})}
			</div>
		)
	}
}
