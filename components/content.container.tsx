import React from "react";
import { StyleSheet, View } from "react-native";
import { _borderRadiusCard } from "@/constants/constants";

type ContentContainerProps = {
	children: React.ReactNode
}

const ContentContainer = ({ children }: ContentContainerProps) => {
	return (
		<View style={styles.container}>
			{children}
		</View>
	);
};

export default ContentContainer;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#00000070",
		flex: 1,
		borderRadius: _borderRadiusCard,
		paddingVertical: 10
	}
});
