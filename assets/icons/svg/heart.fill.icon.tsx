import { FC } from "react"
import { G, Path, Rect, Svg, SvgProps } from "react-native-svg"

export const HeartFillIcon: FC<SvgProps> = ({ width = "24", height = "24" }) => {
	return (
		<Svg width={width} height={height}>
			<G>
				<Rect height="18.5254" opacity="0" width="19.7559" x="0" y="0" />
				<Path d="M9.69727 18.5254C9.90234 18.5254 10.1953 18.3887 10.4102 18.2617C15.9082 14.7461 19.3945 10.6543 19.3945 6.49414C19.3945 3.03711 17.0215 0.595703 13.9551 0.595703C12.0508 0.595703 10.5859 1.65039 9.69727 3.26172C8.82812 1.66016 7.34375 0.595703 5.43945 0.595703C2.37305 0.595703 0 3.03711 0 6.49414C0 10.6543 3.48633 14.7461 8.99414 18.2617C9.19922 18.3887 9.49219 18.5254 9.69727 18.5254Z" fill="#ffffff" fill-opacity="0.85" />
			</G>
		</Svg>

	)
}