import { FC } from "react"
import { G, Path, Rect, Svg, SvgProps } from "react-native-svg"

export const MusicSmallIcon: FC<SvgProps> = ({ color = "#FFFFFF" }) => {
	return (
		<Svg width="9.9375" height="16.0547">
			<G>
				<Rect height="16.0547" opacity="0" width="9.9375" x="0" y="0" />
				<Path d="M9.53125 3.91406L9.53125 0.976562C9.53125 0.5625 9.19531 0.296875 8.79688 0.375L4.78125 1.25C4.28125 1.35938 4.00781 1.63281 4.00781 2.07031L4.02344 10.7578C4.0625 11.1406 3.88281 11.3906 3.53906 11.4609L2.29688 11.7188C0.734375 12.0469 0 12.8438 0 14.0234C0 15.2188 0.921875 16.0547 2.21875 16.0547C3.36719 16.0547 5.08594 15.2109 5.08594 12.9375L5.08594 5.78906C5.08594 5.375 5.16406 5.28906 5.53125 5.21094L9.10156 4.42969C9.36719 4.375 9.53125 4.17188 9.53125 3.91406Z" fill={color} fill-opacity="0.1" />
			</G>
		</Svg>

	)
}