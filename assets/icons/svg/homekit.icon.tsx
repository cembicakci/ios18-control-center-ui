import { FC } from "react"
import { G, Path, Rect, Svg, SvgProps } from "react-native-svg"

export const HomekitIcon: FC<SvgProps> = ({ width = "24", height = "24" }) => {
	return (
		<Svg width={width} height={height}>
			<G>
				<Rect height="22.1631" opacity="0" width="23.6719" x="0" y="0" />
				<Path d="M2.8125 18.3521C2.8125 19.7192 3.62305 20.5103 5.01953 20.5103L18.3105 20.5103C19.6973 20.5103 20.5078 19.7192 20.5078 18.3521L20.5078 7.44385L19.1211 7.34619L19.1211 18.147C19.1211 18.7817 18.7793 19.1333 18.1641 19.1333L5.16602 19.1333C4.54102 19.1333 4.19922 18.7817 4.19922 18.147L4.19922 7.35596L2.8125 7.44385ZM0 9.61182C0 10.0024 0.283203 10.2661 0.712891 10.2661C0.888672 10.2661 1.02539 10.2075 1.15234 10.1099L11.3184 1.58447C11.5234 1.39893 11.7871 1.38916 12.002 1.58447L22.168 10.1099C22.2852 10.2075 22.4219 10.2661 22.6074 10.2661C23.0273 10.2661 23.3105 10.0024 23.3105 9.61182C23.3105 9.35791 23.2129 9.18213 22.998 9.00635L12.832 0.461426C12.1094-0.153809 11.2207-0.153809 10.4883 0.461426L0.3125 9.00635C0.0976562 9.18213 0 9.35791 0 9.61182ZM18.0566 5.23682L20.5078 7.30713L20.5078 2.79541C20.5078 2.36572 20.2344 2.09229 19.8047 2.09229L18.7598 2.09229C18.3398 2.09229 18.0566 2.36572 18.0566 2.79541Z" fill="#ffffff" fill-opacity="0.85" />
				<Path d="M6.02539 16.0767C6.02539 16.8579 6.52344 17.3267 7.38281 17.3267L15.9473 17.3267C16.7969 17.3267 17.3047 16.8579 17.3047 16.0767L17.3047 8.479L12.2949 4.27979C11.9043 3.96729 11.416 3.96729 11.0352 4.27979L6.02539 8.479ZM7.41211 15.481L7.41211 9.15283L11.3477 5.84229C11.5234 5.6958 11.7969 5.68604 11.9727 5.84229L15.918 9.15283L15.918 15.481C15.918 15.7837 15.752 15.9497 15.4492 15.9497L7.87109 15.9497C7.57812 15.9497 7.41211 15.7837 7.41211 15.481Z" fill="#ffffff" fill-opacity="0.85" />
				<Path d="M9.22852 13.2153C9.22852 13.7817 9.59961 14.1333 10.1953 14.1333L13.125 14.1333C13.7305 14.1333 14.0918 13.7817 14.0918 13.2153L14.0918 10.0415L12.2168 8.46924C11.875 8.18604 11.4453 8.18604 11.1133 8.46924L9.22852 10.0415ZM10.5859 12.5708L10.5859 10.6763L11.4258 9.96338C11.5723 9.84619 11.7578 9.84619 11.8945 9.96338L12.7344 10.6763L12.7344 12.5708C12.7344 12.7173 12.666 12.7954 12.5098 12.7954L10.8105 12.7954C10.6641 12.7954 10.5859 12.7173 10.5859 12.5708Z" fill="#ffffff" fill-opacity="0.85" />
			</G>
		</Svg>
	)
}