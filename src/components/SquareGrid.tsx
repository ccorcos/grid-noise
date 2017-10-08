import * as React from "react"
import Component from "reactive-magic/component"
import Note from "./Note"

const majorScale = [1, 3, 5, 6, 8, 10, 12]

export default class SquareGrid extends Component<{}> {
	private nth(n: number) {
		const base = 30
		const offset = Math.floor(n / majorScale.length) * 12
		const mode = n % majorScale.length
		return base + offset + mode
	}

	view() {
		const height = 10
		const width = majorScale.length
		const offset = 2
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
												}}
												midi={this.nth(h * offset + w)}
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
