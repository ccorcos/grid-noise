import * as React from "react"
import Component from "reactive-magic/component"
import Note from "./Note"

const majorScale = [0, 2, 4, 5, 7, 9, 11]

export default class SquareGrid extends Component<{}> {
	private nth(n: number) {
		const base = 30
		const offset = Math.floor(n / majorScale.length) * 12
		const mode = n % majorScale.length
		return base + offset + majorScale[mode]
	}

	view() {
		const height = 10
		const width = majorScale.length
		const offset = 2
		return (
			<div style={{ display: "flex", flexDirection: "column" }}>
				{Array(height)
					.fill(undefined)
					.map((_, h) => {
						return (
							<div key={h} style={{ display: "flex" }}>
								{Array(width)
									.fill(undefined)
									.map((_, w) => {
										const midi = this.nth(h * offset + w)
										return (
											<Note
												key={w}
												style={{
													margin: 0,
													height: 50,
													width: 50,
													border: "1px solid black",
													backgroundColor: `hsl(${(midi % 12) /
														12 *
														360}, 100%, 50%)`,
												}}
												midi={midi}
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
