import { StyleSheet, Text, View } from "react-native";
import { height } from "@/constants/constants";

const SecondScreen = () => {
	return (
		<View style={styles.container}>
			<Text>SecondScreen</Text>
		</View>
	);
};

export default SecondScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: height,
		justifyContent: 'center'
	}
});
