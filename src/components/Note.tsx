import * as React from "react"
import * as Tone from "tone"
import { Value } from "reactive-magic"
import Component from "reactive-magic/component"

const freeverb = new Tone.Freeverb({
	roomSize: 0.5,
	dampening: 30000,
}).toMaster()

var filter = new Tone.Filter({
	type: "lowpass",
	frequency: 250,
	rolloff: -12, // -12, -24, -48 or -96
	Q: 1,
	gain: 0,
}).connect(freeverb)

var synth = new Tone.PolySynth({
	polyphony: 4,
	voice: Tone.MonoSynth,
}).connect(filter)

interface NoteProps {}

export default class Note extends Component<NoteProps> {
	down = new Value(false)

	view({ render }) {
		return (
			<div
				onMouseDown={this.handleMouseDown}
				onMouseUp={this.handleMouseUp}
				onMouseLeave={this.handleMouseLeave}
				style={{
					height: 100,
					width: 100,
					backgroundColor: "blue",
				}}
			/>
		)
	}

	private handleMouseDown = () => {
		this.triggerAttack()
	}

	private handleMouseUp = () => {
		this.triggerRelease()
	}

	private handleMouseLeave = () => {
		this.triggerRelease()
	}

	triggerAttack() {
		this.down.set(true)
		synth.triggerAttack(400)
	}

	triggerRelease() {
		this.down.set(false)
		synth.triggerRelease(400)
	}
}
