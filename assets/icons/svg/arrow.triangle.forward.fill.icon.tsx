import { FC } from "react"
import { G, Path, Rect, Svg, SvgProps } from "react-native-svg"

export const ArrowTriangleForwardFillIcon: FC<SvgProps> = ({ width = "24", height = "24" }) => {
	return (
		<Svg width={width} height={height}>
			<G>
				<Rect height="15.5371" opacity="0" width="16.0742" x="0" y="0" />
				<Path d="M1.31836 15.5371C1.70898 15.5371 2.02148 15.3711 2.43164 15.166L14.9805 9.08203C15.8105 8.67188 16.0742 8.29102 16.0742 7.77344C16.0742 7.25586 15.8105 6.88477 14.9805 6.47461L2.43164 0.380859C2.01172 0.175781 1.69922 0.00976562 1.30859 0.00976562C0.585938 0.00976562 0.136719 0.556641 0.136719 1.40625L0.146484 14.1406C0.146484 14.9902 0.595703 15.5371 1.31836 15.5371Z" fill="#ffffff" fill-opacity="0.85" />
			</G>
		</Svg>

	)
}