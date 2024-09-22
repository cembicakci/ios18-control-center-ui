import { StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

type IconContainerProps = {
	icon: JSX.Element
}

/**
 * @param {JSX.Element} icon - Icon direk prop olarak geçer.
 */

const IconContainer = ({ icon }: IconContainerProps) => {
	return (
		<BlurView intensity={100} style={styles.blurContainer}>
			{icon}
		</BlurView>
	);
};

export default IconContainer;

const styles = StyleSheet.create({
	blurContainer: {
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
		borderRadius: 100,
		width: 56,
		height: 56
	},
});
