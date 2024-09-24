import { StyleSheet, TouchableOpacity } from "react-native";

type IconContainerProps = {
	icon: JSX.Element,
	color?: string,
	size?: "small" | "normal"
}

const IconContainer = ({ icon, color, size }: IconContainerProps) => {
	return (
		<TouchableOpacity
			style={
				[
					styles.blurContainer, size === "small" ? styles.small : styles.normal,
					{
						backgroundColor: color ? color : '#FFFFFF30',
					}
				]
			}
		>
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
		borderRadius: 100,
	},
	normal: {
		width: 62,
		height: 62
	},
	small: {
		width: 30,
		height: 30
	}
});
