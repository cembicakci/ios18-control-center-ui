import { Animated, Image, StyleSheet } from "react-native";
import { _borderRadius, _itemSize, _spacing, height, width } from "@/constants/constants";

type LayoutElementProps = {
	children: any
}

const LayoutElement = ({ children }: LayoutElementProps) => {

	return (
		<Animated.View
			style={[styles, {
				height: height,
			}]}
		>
			{children}
		</Animated.View>
	);
};

export default LayoutElement;

const styles = StyleSheet.create({})

