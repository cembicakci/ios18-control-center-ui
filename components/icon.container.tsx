import { StyleSheet, TouchableOpacity } from "react-native";

type IconContainerProps = {
	icon: JSX.Element,
	size?: "small" | "big",
	color?: string
}

const IconContainer = ({ icon, size, color }: IconContainerProps) => {
	return (
		<TouchableOpacity style={[styles.blurContainer, size === "small" ? styles.small : styles.big, {
			backgroundColor: color ? color : '#FFFFFF30'
		}]}>
			{icon}
		</TouchableOpacity>
	);
};

export default IconContainer;

const styles = StyleSheet.create({
	blurContainer: {
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
		borderRadius: 100
	},
	small: {
		width: 34,
		height: 34
	},
	big: {
		width: 68,
		height: 68
	}
});
