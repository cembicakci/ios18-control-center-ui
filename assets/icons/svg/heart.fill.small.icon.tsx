import { FC } from "react"
import { G, Path, Rect, Svg, SvgProps } from "react-native-svg"

export const HeartFillSmallIcon: FC<SvgProps> = ({ color = '#FFFFFF' }) => {
	return (
		<Svg width="16.9219" height="15.8203">
			<G>
				<Rect height="14.8203" opacity="0" width="15.9219" x="0" y="0" />
				<Path d="M7.75781 14.8203C7.92188 14.8203 8.15625 14.7109 8.32812 14.6094C12.7266 11.7969 15.5156 8.52344 15.5156 5.19531C15.5156 2.42969 13.6172 0.476562 11.1641 0.476562C9.64062 0.476562 8.46875 1.32031 7.75781 2.60938C7.0625 1.32812 5.875 0.476562 4.35156 0.476562C1.89844 0.476562 0 2.42969 0 5.19531C0 8.52344 2.78906 11.7969 7.19531 14.6094C7.35938 14.7109 7.59375 14.8203 7.75781 14.8203Z" fill={color} fill-opacity="0.1" />
			</G>
		</Svg>

	)
}