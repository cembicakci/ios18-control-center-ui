import { FC } from "react"
import { G, Path, Rect, Svg, SvgProps } from "react-native-svg"

export const AirplaneIcon: FC<SvgProps> = ({ width = "24", height = "20", fill = "#FFFFFF" }) => {
	return (
		<Svg width={width} height={height} >
			<G>
				<Rect height="19.8926" opacity="0" width="23.9941" x="0" y="0" />
				<Path d="M23.9941 9.94141C23.9844 8.79883 22.4316 7.96875 20.5664 7.96875L16.6309 7.96875C16.084 7.96875 15.8789 7.88086 15.5566 7.50977L8.99414 0.351562C8.78906 0.117188 8.53516 0 8.24219 0L7.10938 0C6.85547 0 6.70898 0.224609 6.83594 0.498047L10.2148 7.96875L5.25391 8.53516L3.48633 5.29297C3.35938 5.04883 3.14453 4.94141 2.82227 4.94141L2.40234 4.94141C2.14844 4.94141 1.98242 5.10742 1.98242 5.36133L1.98242 14.5215C1.98242 14.7754 2.14844 14.9316 2.40234 14.9316L2.82227 14.9316C3.14453 14.9316 3.35938 14.8242 3.48633 14.5898L5.25391 11.3477L10.2148 11.9141L6.83594 19.3848C6.70898 19.6484 6.85547 19.8828 7.10938 19.8828L8.24219 19.8828C8.53516 19.8828 8.78906 19.7559 8.99414 19.5312L15.5566 12.3633C15.8789 12.002 16.084 11.9141 16.6309 11.9141L20.5664 11.9141C22.4316 11.9141 23.9844 11.0742 23.9941 9.94141Z" fill={fill} opacity="1" />
			</G>
		</Svg>
	)
}