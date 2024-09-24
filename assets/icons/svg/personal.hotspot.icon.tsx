import { FC } from "react"
import { G, Path, Rect, Svg, SvgProps } from "react-native-svg"

export const PersonalHotspotIcon: FC<SvgProps> = () => {
	return (
		<Svg width="20.1182" height="11.1904">
			<G>
				<Rect height="11.1904" opacity="0" width="20.1182" x="0" y="0" />
				<Path d="M3.97168 8.01172L4.52539 8.01172C4.48438 7.65625 4.4502 7.2666 4.49805 6.91113L4.04688 6.91113C2.36523 6.91113 1.16895 5.72852 1.16895 4.0332C1.16895 2.35156 2.37207 1.16211 4.04688 1.16211L10.1104 1.16211C11.7852 1.16211 12.9883 2.35156 12.9883 4.0332C12.9883 5.72852 11.7852 6.91113 10.1104 6.91113L7.71094 6.91113C7.61523 7.17773 7.64941 7.69727 7.86133 8.01172L10.1855 8.01172C12.5029 8.01172 14.1572 6.38477 14.1572 4.0332C14.1572 1.68848 12.5029 0.0615234 10.1855 0.0615234L3.97168 0.0615234C1.6543 0.0615234 0 1.68848 0 4.0332C0 6.38477 1.6543 8.01172 3.97168 8.01172ZM9.4541 11.1904L15.668 11.1904C17.9854 11.1904 19.6396 9.56348 19.6396 7.21191C19.6396 4.86719 17.9854 3.24023 15.668 3.24023L15.1074 3.24023C15.1484 3.58887 15.1826 3.98535 15.1416 4.34082L15.5859 4.34082C17.2676 4.34082 18.4707 5.52344 18.4707 7.21191C18.4707 8.90039 17.2676 10.0898 15.5859 10.0898L9.5293 10.0898C7.85449 10.0898 6.65137 8.90039 6.65137 7.21191C6.65137 5.52344 7.84766 4.34082 9.5293 4.34082L11.9287 4.34082C12.0244 4.07422 11.9902 3.55469 11.7715 3.24023L9.4541 3.24023C7.12988 3.24023 5.48242 4.86719 5.48242 7.21191C5.48242 9.56348 7.12988 11.1904 9.4541 11.1904Z" fill="#ffffff" fill-opacity="0.85" />
			</G>
		</Svg>

	)
}