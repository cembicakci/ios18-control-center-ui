import { FC } from "react"
import { Polyline, Svg, SvgProps } from "react-native-svg"

export const BluetoothIcon: FC<SvgProps> = ({ width = "24", height = "24" }) => {
	return (
		<Svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
			<Polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></Polyline>
		</Svg>
	)
}