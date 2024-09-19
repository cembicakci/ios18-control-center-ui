import { FC } from "react"
import { G, Path, Rect, Svg, SvgProps } from "react-native-svg"

export const MoonFillIcon: FC<SvgProps> = ({ width = "24", height = "24" }) => {
	return (
		<Svg width={width} height={height}>
			<G>
				<Rect height="19.3848" opacity="0" width="19.6289" x="0" y="0" />
				<Path d="M15.1074 13.0859C9.82422 13.0859 6.44531 9.77539 6.44531 4.48242C6.44531 3.38867 6.70898 1.82617 7.06055 1.01562C7.14844 0.791016 7.16797 0.654297 7.16797 0.556641C7.16797 0.292969 6.97266 0 6.5918 0C6.48438 0 6.25 0.0292969 6.03516 0.107422C2.42188 1.55273 0 5.43945 0 9.53125C0 15.2734 4.375 19.375 10.0977 19.375C14.3066 19.375 17.9492 16.8262 19.1602 13.6426C19.248 13.418 19.2676 13.1836 19.2676 13.0957C19.2676 12.7344 18.9648 12.4902 18.6914 12.4902C18.5645 12.4902 18.457 12.5195 18.2715 12.5781C17.5195 12.8223 16.3086 13.0859 15.1074 13.0859Z" fill="#ffffff" fill-opacity="0.85" />
			</G>
		</Svg>
	)
}