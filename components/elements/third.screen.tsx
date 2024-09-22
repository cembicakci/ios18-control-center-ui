import { StyleSheet, Text, View } from "react-native";
import { height } from "@/constants/constants";

const ThirdScreen = () => {
	return (
<View style={styles.container}>
			<Text>ThirdScreen</Text>
		</View>
	);
};

export default ThirdScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: height,
		justifyContent: 'center'
	}
});
