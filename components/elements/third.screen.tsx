import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { height } from "@/constants/constants";
import { defaultStyles } from "@/constants/default.styles";
import { HomekitIcon } from "@/assets/icons";

const ThirdScreen = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.content}>
				<HomekitIcon />
				<Text style={defaultStyles.textMain}>Ev'i Ayarlama Yok</Text>
			</TouchableOpacity>

			<TouchableOpacity style={defaultStyles.iconContainer}>
				<HomekitIcon />
			</TouchableOpacity>
		</View>
	);
};

export default ThirdScreen;

const styles = StyleSheet.create({
	container: {
		height: height,
		justifyContent: 'center'
	},
	content: {
		...defaultStyles.card,
		alignItems: 'center',
		justifyContent: 'center',
		height: height * 0.60,
		marginBottom: 18
	}
});
