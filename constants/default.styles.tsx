import { StyleSheet } from 'react-native';
import { _borderRadiusCard } from './constants';

export const defaultStyles = StyleSheet.create({
	textMain: {
		color: "#FFFFFF",
		fontSize: 14,
		fontWeight: '600'
	},
	textDisabled: {
		color: "#BDBDBD",
		fontSize: 12,
		fontWeight: '500'
	},
	card: {
		backgroundColor: "#00000080",
		borderRadius: _borderRadiusCard,
		paddingVertical: 12,
		gap: 12
	},
	iconContainer: {
		backgroundColor: "#00000095",
		width: 72,
		height: 72,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100
	},
	iconContainerSmall: {
		backgroundColor: "#FFFFFF30",
		width: 52,
		height: 52,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100
	},
	iconContainerSmall2: {
		backgroundColor: "#FFFFFF30",
		width: 40,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100
	},
	flex: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	flexCenter: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	flexBetween: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	flexEvenly: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
});