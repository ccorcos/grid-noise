import * as React from "react"
import Component from "reactive-magic/component"
import Note from "./Note"

const scale = [0, 2, 4, 5, 7, 9, 11]
const rowOffset = 2

export default class SquareGrid extends Component<{}> {
	private nth(n: number) {
		const base = 30
		const offset = Math.floor(n / scale.length) * 12
		const mode = n % scale.length
		return base + offset + scale[mode]
	}

	view() {
		const height = 10
		const width = scale.length
		return (
			<div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
				{Array(height)
					.fill(undefined)
					.map((_, h) => {
						return (
							<div key={h} style={{ display: "flex", flex: 1 }}>
								{Array(width)
									.fill(undefined)
									.map((_, w) => {
										const midi = this.nth(h * rowOffset + w)
										return (
											<Note
												key={w}
												style={{
													flex: 1,
													margin: 0,
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
