import { StyleSheet, Text, View } from "react-native";
import { height } from "@/constants/constants";

const ForthScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text>ForthScreen</Text>
			</View>
		</View>
	);
};

export default ForthScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: height,
		justifyContent: 'center'
	},
	content: {
		borderWidth: 1,
		height: "80%",
		justifyContent: "center"
	}
});
