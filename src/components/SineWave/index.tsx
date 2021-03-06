import { ResponsiveLineCanvas } from "@nivo/line";
import React from "react";

type Point = { x: number, y: number };
type SineWaveProps = {
	a: Point[],
	b: Point[]
};

export class SineWave extends React.Component<SineWaveProps, {}> {
	render() {
		const margin = 50;
		return (
			<>
				<ResponsiveLineCanvas
					data={[
						{
							id: "a",
							color: "rgb(255, 0, 0)",
							data: this.props.a
						},
						{
							id: "b",
							color: "rgb(0, 255, 0)",
							data: this.props.b
						}
					]}
					axisLeft={{legend: "Activation", legendPosition: "middle", legendOffset: -40}}
					axisBottom={{legend: "Time", legendPosition: "middle", legendOffset: 40}}
					enablePoints={false}
					enableGridX={true}
					enableGridY={true}
					colors={["#137cbd", "#0f9960"]}
					theme={{textColor: "#137cbd", grid: {line: {stroke: "#141414"}}}}
					margin={{top: margin, bottom: margin, left: margin, right: margin}}
					xScale={{min: (this.props.a[0] || {x: 0}).x, max: 300, type: "linear"}}
					yScale={{max: 1, min: 0, type: "linear"}}
					isInteractive={false}
					/>
				</>
		);
	}
}
