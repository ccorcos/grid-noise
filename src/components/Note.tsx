import * as React from "react"
import * as Tone from "tone"
import { Value } from "reactive-magic"
import Component from "reactive-magic/component"
import * as midi from "midiutils"

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

interface NoteProps {
	midi: number
	style: React.CSSProperties
}

export default class Note extends Component<NoteProps> {
	down = new Value(false)

	view() {
		return (
			<button
				onMouseDown={this.handleMouseDown}
				onMouseUp={this.handleMouseUp}
				onMouseLeave={this.handleMouseLeave}
				style={this.props.style}
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
		synth.triggerAttack(midi.noteNumberToFrequency(this.props.midi))
	}

	triggerRelease() {
		this.down.set(false)
		synth.triggerRelease(midi.noteNumberToFrequency(this.props.midi))
	}
}
